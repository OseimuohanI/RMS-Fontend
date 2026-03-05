import { usePageContext } from '@/microservice/page-context';
import { backendUrl } from '@/microservice/backend';
import type { FormEvent, MouseEvent, PropsWithChildren, ReactNode } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'head';

type RouteLike = string | { url: string; method?: HttpMethod };

export interface InertiaLinkProps {
  href: RouteLike;
  method?: HttpMethod;
  as?: 'a' | 'button';
  className?: string;
  prefetch?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  children?: ReactNode;
  [key: string]: unknown;
}

type FormErrors = Record<string, string>;

type FormRenderProps = {
  processing: boolean;
  errors: FormErrors;
  recentlySuccessful: boolean;
  clearErrors: () => void;
  resetAndClearErrors: () => void;
};

type FormOptions = {
  preserveScroll?: boolean;
};

type FormProps = PropsWithChildren<{
  action?: string;
  method?: HttpMethod;
  className?: string;
  onSuccess?: () => void;
  onError?: (errors: FormErrors) => void;
  options?: FormOptions;
  resetOnSuccess?: boolean | string[];
  resetOnError?: boolean | string[];
  transform?: (data: Record<string, FormDataEntryValue>) => Record<string, unknown>;
}>;

function resolveRoute(input: RouteLike): { url: string; method: HttpMethod } {
  if (typeof input === 'string') {
    return { url: input, method: 'get' };
  }

  return { url: input.url, method: input.method ?? 'get' };
}

function toObject(formData: FormData): Record<string, FormDataEntryValue> {
  const result: Record<string, FormDataEntryValue> = {};
  for (const [key, value] of formData.entries()) {
    result[key] = value;
  }
  return result;
}

function resetFields(form: HTMLFormElement, fields?: string[]) {
  if (!fields) {
    form.reset();
    return;
  }

  fields.forEach((field) => {
    const node = form.elements.namedItem(field);
    if (!node) {
      return;
    }

    if (node instanceof RadioNodeList) {
      Array.from(node).forEach((entry) => {
        if (entry instanceof HTMLInputElement) {
          entry.checked = false;
          entry.value = '';
        }
      });
      return;
    }

    if (node instanceof HTMLInputElement) {
      if (node.type === 'checkbox' || node.type === 'radio') {
        node.checked = false;
      } else {
        node.value = '';
      }
      return;
    }

    if (node instanceof HTMLTextAreaElement || node instanceof HTMLSelectElement) {
      node.value = '';
    }
  });
}

export function Head({ title }: { title?: string }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return null;
}

export function Link({ href, method, as, onClick, children, ...rest }: InertiaLinkProps) {
  const navigate = useNavigate();
  const route = resolveRoute(href);
  const finalMethod = (method ?? route.method ?? 'get').toLowerCase() as HttpMethod;

  const clickHandler = async (event: MouseEvent<HTMLElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) {
      return;
    }

    if (finalMethod !== 'get') {
      event.preventDefault();
      await fetch(backendUrl(route.url), {
        method: finalMethod.toUpperCase(),
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
      });
      if (route.url === '/logout') {
        navigate('/login');
      }
      return;
    }
  };

  if (as === 'button' || finalMethod !== 'get') {
    return (
      <button type="button" onClick={clickHandler} {...(rest as Record<string, unknown>)}>
        {children}
      </button>
    );
  }

  if (typeof href === 'string' && /^(https?:)?\/\//.test(href)) {
    return (
      <a href={href} onClick={clickHandler} {...(rest as Record<string, unknown>)}>
        {children}
      </a>
    );
  }

  return (
    <RouterLink to={route.url} onClick={clickHandler} {...(rest as Record<string, unknown>)}>
      {children}
    </RouterLink>
  );
}

export function Form({
  action,
  method = 'post',
  className,
  children,
  onSuccess,
  onError,
  resetOnSuccess,
  resetOnError,
  transform,
}: FormProps) {
  const [processing, setProcessing] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [recentlySuccessful, setRecentlySuccessful] = useState(false);

  const slotProps = useMemo<FormRenderProps>(
    () => ({
      processing,
      errors,
      recentlySuccessful,
      clearErrors: () => setErrors({}),
      resetAndClearErrors: () => setErrors({}),
    }),
    [processing, errors, recentlySuccessful],
  );

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!action) {
      return;
    }

    const form = event.currentTarget;
    setProcessing(true);
    setErrors({});
    setRecentlySuccessful(false);

    const rawFormData = new FormData(form);
    const data = transform ? transform(toObject(rawFormData)) : toObject(rawFormData);

    try {
      const response = await fetch(backendUrl(action), {
        method: method.toUpperCase(),
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: method === 'get' ? undefined : JSON.stringify(data),
      });

      if (!response.ok) {
        if (response.status === 422) {
          const payload = (await response.json()) as { errors?: Record<string, string[]> };
          const mapped = Object.fromEntries(
            Object.entries(payload.errors ?? {}).map(([key, value]) => [key, value?.[0] ?? 'Invalid value']),
          );
          setErrors(mapped);
          onError?.(mapped);

          if (Array.isArray(resetOnError)) {
            resetFields(form, resetOnError);
          } else if (resetOnError === true) {
            resetFields(form);
          }
          return;
        }

        const fallbackErrors = { form: `Request failed with status ${response.status}` };
        setErrors(fallbackErrors);
        onError?.(fallbackErrors);
        return;
      }

      onSuccess?.();
      setRecentlySuccessful(true);

      if (Array.isArray(resetOnSuccess)) {
        resetFields(form, resetOnSuccess);
      } else if (resetOnSuccess === true) {
        resetFields(form);
      }

      window.setTimeout(() => setRecentlySuccessful(false), 2000);
    } catch {
      const networkErrors = { form: 'Unable to connect to backend service.' };
      setErrors(networkErrors);
      onError?.(networkErrors);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={submit} className={className}>
      {typeof children === 'function' ? (children as (args: FormRenderProps) => ReactNode)(slotProps) : children}
    </form>
  );
}

export function usePage<T extends { [key: string]: unknown } = { [key: string]: unknown }>() {
  const page = usePageContext();
  return page as { url: string; props: T };
}

export const router = {
  flushAll: () => undefined,
  visit: (href: RouteLike) => {
    const { url } = resolveRoute(href);
    window.location.href = url;
  },
  get: (href: RouteLike) => {
    const { url } = resolveRoute(href);
    window.location.href = url;
  },
};

export async function createInertiaApp() {
  return null;
}
