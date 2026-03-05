import { PageContext } from '@/microservice/page-context';
import { getRouteProps } from '@/microservice/route-props';
import type { User } from '@/types';
import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';

import About from '@/pages/about';
import Blog from '@/pages/blog';
import Careers from '@/pages/careers';
import Contact from '@/pages/contact';
import Dashboard from '@/pages/dashboard';
import Faq from '@/pages/faq';
import Features from '@/pages/features';
import Pricing from '@/pages/pricing';
import ResourcesPage from '@/pages/resources/index';
import Security from '@/pages/security';
import Sitemap from '@/pages/sitemap';
import Team from '@/pages/team/index';
import Welcome from '@/pages/welcome';
import ConfirmPassword from '@/pages/auth/confirm-password';
import ForgotPassword from '@/pages/auth/forgot-password';
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import ResetPassword from '@/pages/auth/reset-password';
import TwoFactorChallenge from '@/pages/auth/two-factor-challenge';
import VerifyEmail from '@/pages/auth/verify-email';
import CookiesPage from '@/pages/legal/cookies';
import Privacy from '@/pages/legal/privacy';
import Terms from '@/pages/legal/terms';
import Appearance from '@/pages/settings/appearance';
import Password from '@/pages/settings/password';
import Profile from '@/pages/settings/profile';
import TwoFactor from '@/pages/settings/two-factor';
import { backendUrl } from './backend';

function RouterShell() {
  const location = useLocation();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await fetch(backendUrl('/api/user'), {
          credentials: 'include',
          headers: { Accept: 'application/json' },
        });
        if (!response.ok) {
          setUser(null);
          return;
        }
        const data = (await response.json()) as User;
        setUser(data);
      } catch {
        setUser(null);
      }
    };

    void loadUser();
  }, [location.pathname]);

  const pageContext = useMemo(() => {
    const url = `${location.pathname}${location.search}`;
    return {
      url,
      props: getRouteProps(location.pathname, location.search, user),
    };
  }, [location.pathname, location.search, user]);

  return (
    <PageContext.Provider value={pageContext}>
      <Routes>
        <Route path="/" element={<Welcome canRegister />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/features" element={<Features />} />
        <Route path="/security" element={<Security />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/sitemap" element={<Sitemap />} />

        <Route path="/login" element={<Login canRegister canResetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword token="" email="" />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/confirm-password" element={<ConfirmPassword />} />
        <Route path="/two-factor-challenge" element={<TwoFactorChallenge />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/settings/profile" element={<Profile mustVerifyEmail />} />
        <Route path="/settings/password" element={<Password />} />
        <Route path="/settings/appearance" element={<Appearance />} />
        <Route path="/settings/two-factor" element={<TwoFactor />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PageContext.Provider>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <RouterShell />
    </BrowserRouter>
  );
}
