'use client';

export type TestUser = { id: string; name: string; email: string };

const USER_KEY = 'arcus_test_user';
const USERS_KEY = 'arcus_test_users';

function readUsers(): Array<TestUser & { password: string }> {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem(USERS_KEY) || '[]'); } catch { return []; }
}

export function testAuthEnabled() {
  return process.env.NEXT_PUBLIC_AUTH_MODE !== 'firebase';
}

export function getTestUser(): TestUser | null {
  if (typeof window === 'undefined') return null;
  try { return JSON.parse(localStorage.getItem(USER_KEY) || 'null'); } catch { return null; }
}

export function signUpTestUser(name: string, email: string, password: string): TestUser {
  const users = readUsers();
  const normalized = email.trim().toLowerCase();
  if (users.some(user => user.email === normalized)) throw new Error('An account with this email already exists. Please sign in.');
  const user = { id: `test_${Date.now()}`, name: name.trim(), email: normalized, password };
  localStorage.setItem(USERS_KEY, JSON.stringify([...users, user]));
  const session = { id: user.id, name: user.name, email: user.email };
  localStorage.setItem(USER_KEY, JSON.stringify(session));
  return session;
}

export function signInTestUser(email: string, password: string): TestUser {
  const user = readUsers().find(item => item.email === email.trim().toLowerCase() && item.password === password);
  if (!user) throw new Error('Invalid test email or password. Create a test account first.');
  const session = { id: user.id, name: user.name, email: user.email };
  localStorage.setItem(USER_KEY, JSON.stringify(session));
  return session;
}

export function signOutTestUser() { localStorage.removeItem(USER_KEY); }

export function resetTestPassword(email: string): void {
  if (!readUsers().some(user => user.email === email.trim().toLowerCase())) throw new Error('No test account was found for this email.');
}
