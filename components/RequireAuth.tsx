'use client';

import { onAuthStateChanged, User } from 'firebase/auth';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { auth, firebaseConfigured } from '../lib/firebase';
import { getTestUser, testAuthEnabled } from '../lib/test-auth';

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const testMode = testAuthEnabled();
  const [user, setUser] = useState<User | null>(null);
  const [testUser, setTestUser] = useState(getTestUser());
  const [checking, setChecking] = useState(!testMode);

  useEffect(() => {
    if (testMode) {
      const current = getTestUser();
      setTestUser(current);
      setChecking(false);
      if (!current) router.replace(`/signin?next=${encodeURIComponent(pathname)}`);
      return;
    }

    if (!firebaseConfigured || !auth) {
      setChecking(false);
      return;
    }

    return onAuthStateChanged(auth, (next) => {
      setUser(next);
      setChecking(false);
      if (!next) router.replace(`/signin?next=${encodeURIComponent(pathname)}`);
    });
  }, [pathname, router, testMode]);

  // During development/testing, use the local test session until Firebase is configured.
  if (testMode) {
    if (checking || !testUser) {
      return <main className="grid min-h-screen place-items-center bg-[#f7f9f8]"><p className="text-sm font-bold text-[#68726e]">Checking your Arcus session…</p></main>;
    }
    return <>{children}</>;
  }

  if (!firebaseConfigured || !auth) {
    return <main className="grid min-h-screen place-items-center bg-[#f7f9f8] p-6"><div className="max-w-lg rounded-2xl border border-[#f0c9cd] bg-white p-7 text-center"><h1 className="text-xl font-black">Authentication configuration required</h1><p className="mt-3 text-sm leading-6 text-[#68726e]">Add the Firebase public environment variables to the deployment environment before authenticated customer pages are opened.</p></div></main>;
  }

  if (checking || !user) return <main className="grid min-h-screen place-items-center bg-[#f7f9f8]"><p className="text-sm font-bold text-[#68726e]">Checking your Arcus session…</p></main>;
  return <>{children}</>;
}
