import type { User } from '@/types';

function baseSharedProps(user: User | null): Record<string, unknown> {
  return {
    name: 'ResourceMS',
    quote: {
      message: 'Efficient resource management starts with clear visibility.',
      author: 'ResourceMS',
    },
    auth: { user },
    sidebarOpen: true,
    sanctum_token: localStorage.getItem('sanctum_token') || undefined,
    stats: {
      totalResources: 0,
      availableResources: 0,
      inUseResources: 0,
      maintenanceResources: 0,
    },
    recentResources: [],
    resourcesByType: {},
    resourcesByStatus: {},
  };
}

export function getRouteProps(pathname: string, search: string, user: User | null): Record<string, unknown> {
  const query = new URLSearchParams(search);
  const shared = baseSharedProps(user);

  if (pathname === '/login') {
    return { ...shared, canRegister: true, canResetPassword: true, status: query.get('status') || undefined };
  }

  if (pathname === '/register') {
    return { ...shared };
  }

  if (pathname === '/forgot-password') {
    return { ...shared, status: query.get('status') || undefined };
  }

  if (pathname === '/reset-password') {
    return {
      ...shared,
      token: query.get('token') || '',
      email: query.get('email') || '',
    };
  }

  if (pathname === '/verify-email') {
    return { ...shared, status: query.get('status') || undefined };
  }

  if (pathname === '/settings/profile') {
    return { ...shared, mustVerifyEmail: true, status: query.get('status') || undefined };
  }

  if (pathname === '/') {
    return { ...shared, canRegister: true };
  }

  return shared;
}
