export type AdminRole = 'admin' | 'customer_support' | 'financial_analyst' | 'copywriter';

export const ADMIN_ROLES: Record<AdminRole, { label: string; description: string }> = {
  admin: { label: 'Administrator', description: 'Full operational control across the Arcus Strategy platform.' },
  customer_support: { label: 'Customer Support', description: 'Customer lookup, onboarding, tickets, complaints and escalations.' },
  financial_analyst: { label: 'Financial Analyst', description: 'Performance, risk, broker and financial reporting without routine password access.' },
  copywriter: { label: 'Copywriter', description: 'Blog, education, FAQ, announcements and publishing workflows.' },
};

export type AdminNavGroup = {
  label: string;
  href?: string;
  icon: string;
  children?: Array<{ label: string; href: string }>;
};

const fullNavigation: AdminNavGroup[] = [
  { label: 'Dashboard', href: '/admin', icon: 'layout-dashboard' },
  { label: 'Customers', icon: 'users', children: [
    { label: 'All Customers', href: '/admin/customers' }, { label: 'KYC', href: '/admin/customers/kyc' },
    { label: 'Suspended', href: '/admin/customers/suspended' }, { label: 'Customer Activity', href: '/admin/customers/activity' },
  ]},
  { label: 'Services', icon: 'briefcase-business', children: [
    { label: 'Copy Trading', href: '/admin/services/copy-trading' }, { label: 'MAM', href: '/admin/services/mam' },
    { label: 'PAMM', href: '/admin/services/pamm' }, { label: 'ServerLess', href: '/admin/services/serverless' },
    { label: 'Prop Firm A.T', href: '/admin/services/prop-firm-at' }, { label: 'TradingView', href: '/admin/services/tradingview' },
  ]},
  { label: 'Trading', icon: 'chart-no-axes-combined', children: [
    { label: 'Broker Accounts', href: '/admin/trading/broker-accounts' }, { label: 'Performance', href: '/admin/trading/performance' },
    { label: 'Risk Analysis', href: '/admin/trading/risk' }, { label: 'Investor Credentials', href: '/admin/trading/investor-credentials' },
    { label: 'Myfxbook', href: '/admin/trading/myfxbook' },
  ]},
  { label: 'Subscriptions', icon: 'credit-card', children: [
    { label: 'Active', href: '/admin/subscriptions/active' }, { label: 'Trials', href: '/admin/subscriptions/trials' },
    { label: 'Expired', href: '/admin/subscriptions/expired' }, { label: 'Cancelled', href: '/admin/subscriptions/cancelled' },
  ]},
  { label: 'Finance', icon: 'wallet-cards', children: [
    { label: 'Transactions', href: '/admin/finance/transactions' }, { label: 'Revenue', href: '/admin/finance/revenue' },
    { label: 'Refunds', href: '/admin/finance/refunds' }, { label: 'Chargebacks', href: '/admin/finance/chargebacks' },
  ]},
  { label: 'Content', icon: 'file-pen-line', children: [
    { label: 'Blog', href: '/admin/content/blog' }, { label: 'Education', href: '/admin/content/education' },
    { label: 'FAQ', href: '/admin/content/faq' }, { label: 'Announcements', href: '/admin/content/announcements' },
  ]},
  { label: 'Support', icon: 'headphones', children: [
    { label: 'Tickets', href: '/admin/support/tickets' }, { label: 'Complaints', href: '/admin/support/complaints' },
    { label: 'Escalations', href: '/admin/support/escalations' },
  ]},
  { label: 'Staff & Permissions', href: '/admin/staff', icon: 'user-cog' },
  { label: 'Reports', href: '/admin/reports', icon: 'file-bar-chart' },
  { label: 'Audit Logs', href: '/admin/audit-logs', icon: 'scroll-text' },
  { label: 'Settings', href: '/admin/settings', icon: 'settings-2' },
];

export const ADMIN_NAVIGATION: Record<AdminRole, AdminNavGroup[]> = {
  admin: fullNavigation,
  customer_support: [
    { label: 'Dashboard', href: '/admin', icon: 'layout-dashboard' },
    { label: 'Customers', icon: 'users', children: [{ label: 'All Customers', href: '/admin/customers' }, { label: 'KYC', href: '/admin/customers/kyc' }, { label: 'Customer Activity', href: '/admin/customers/activity' }] },
    { label: 'Support', icon: 'headphones', children: [{ label: 'Tickets', href: '/admin/support/tickets' }, { label: 'Complaints', href: '/admin/support/complaints' }, { label: 'Escalations', href: '/admin/support/escalations' }] },
  ],
  financial_analyst: [
    { label: 'Dashboard', href: '/admin', icon: 'layout-dashboard' },
    { label: 'Trading', icon: 'chart-no-axes-combined', children: [{ label: 'Broker Accounts', href: '/admin/trading/broker-accounts' }, { label: 'Performance', href: '/admin/trading/performance' }, { label: 'Risk Analysis', href: '/admin/trading/risk' }, { label: 'Myfxbook', href: '/admin/trading/myfxbook' }] },
    { label: 'Finance', icon: 'wallet-cards', children: [{ label: 'Transactions', href: '/admin/finance/transactions' }, { label: 'Revenue', href: '/admin/finance/revenue' }, { label: 'Refunds', href: '/admin/finance/refunds' }, { label: 'Chargebacks', href: '/admin/finance/chargebacks' }] },
    { label: 'Reports', href: '/admin/reports', icon: 'file-bar-chart' },
  ],
  copywriter: [
    { label: 'Dashboard', href: '/admin', icon: 'layout-dashboard' },
    { label: 'Content', icon: 'file-pen-line', children: [{ label: 'Blog', href: '/admin/content/blog' }, { label: 'Education', href: '/admin/content/education' }, { label: 'FAQ', href: '/admin/content/faq' }, { label: 'Announcements', href: '/admin/content/announcements' }] },
  ],
};

export const ROLE_SECURITY_RULES = {
  admin: ['full_platform_control', 'manage_staff', 'view_audit_logs', 'manage_settings', 'manage_customers', 'manage_services', 'manage_trading', 'manage_subscriptions', 'manage_finance', 'manage_content', 'manage_support'],
  customer_support: ['customer_lookup', 'support_operations', 'onboarding', 'complaints', 'limited_kyc_view'],
  financial_analyst: ['performance_reporting', 'risk_reporting', 'broker_reporting', 'financial_reporting'],
  copywriter: ['content_create', 'content_edit', 'content_publish', 'media_manage'],
} as const;
