export type AdminRole = 'admin' | 'customer_support' | 'financial_analyst' | 'copywriter';

export const ADMIN_ROLES: Record<AdminRole, { label: string; description: string }> = {
  admin: {
    label: 'Administrator',
    description: 'Full operational control across the Arcus Strategy platform.',
  },
  customer_support: {
    label: 'Customer Support',
    description: 'Customer lookup, onboarding, tickets, complaints and escalations.',
  },
  financial_analyst: {
    label: 'Financial Analyst',
    description: 'Performance, risk, broker and financial reporting without routine password access.',
  },
  copywriter: {
    label: 'Copywriter',
    description: 'Blog, education, FAQ, announcements and publishing workflows.',
  },
};

export const ADMIN_NAVIGATION: Record<AdminRole, Array<{ label: string; href: string; icon: string }>> = {
  admin: [
    { label: 'Overview', href: '/admin', icon: 'layout-dashboard' },
    { label: 'Customers', href: '/admin/customers', icon: 'users' },
    { label: 'KYC & Compliance', href: '/admin/kyc', icon: 'shield-check' },
    { label: 'Services & Accounts', href: '/admin/services', icon: 'briefcase-business' },
    { label: 'Subscriptions', href: '/admin/subscriptions', icon: 'credit-card' },
    { label: 'Payments', href: '/admin/payments', icon: 'wallet-cards' },
    { label: 'Content', href: '/admin/content', icon: 'file-pen-line' },
    { label: 'Support', href: '/admin/support', icon: 'headphones' },
    { label: 'Staff & Permissions', href: '/admin/staff', icon: 'user-cog' },
    { label: 'Reports', href: '/admin/reports', icon: 'chart-no-axes-combined' },
    { label: 'Audit Logs', href: '/admin/audit-logs', icon: 'scroll-text' },
    { label: 'Settings', href: '/admin/settings', icon: 'settings-2' },
  ],
  customer_support: [
    { label: 'Overview', href: '/admin', icon: 'layout-dashboard' },
    { label: 'Customers', href: '/admin/customers', icon: 'users' },
    { label: 'Onboarding', href: '/admin/onboarding', icon: 'clipboard-check' },
    { label: 'Support Tickets', href: '/admin/support', icon: 'headphones' },
    { label: 'Complaints', href: '/admin/complaints', icon: 'message-square-warning' },
    { label: 'Escalations', href: '/admin/escalations', icon: 'arrow-up-right' },
  ],
  financial_analyst: [
    { label: 'Overview', href: '/admin', icon: 'layout-dashboard' },
    { label: 'Performance', href: '/admin/performance', icon: 'chart-no-axes-combined' },
    { label: 'Risk Analysis', href: '/admin/risk', icon: 'shield-alert' },
    { label: 'Broker Accounts', href: '/admin/broker-accounts', icon: 'landmark' },
    { label: 'Myfxbook', href: '/admin/myfxbook', icon: 'activity' },
    { label: 'Financial Reports', href: '/admin/reports/financial', icon: 'file-bar-chart' },
  ],
  copywriter: [
    { label: 'Overview', href: '/admin', icon: 'layout-dashboard' },
    { label: 'Blog', href: '/admin/content/blog', icon: 'newspaper' },
    { label: 'Education', href: '/admin/content/education', icon: 'graduation-cap' },
    { label: 'FAQ', href: '/admin/content/faq', icon: 'circle-help' },
    { label: 'Announcements', href: '/admin/content/announcements', icon: 'megaphone' },
    { label: 'Media Library', href: '/admin/content/media', icon: 'images' },
    { label: 'Publishing', href: '/admin/content/publishing', icon: 'send' },
  ],
};

export const ROLE_SECURITY_RULES = {
  admin: ['full_platform_control', 'manage_staff', 'view_audit_logs', 'manage_settings'],
  customer_support: ['customer_lookup', 'support_operations', 'onboarding', 'complaints', 'limited_kyc_view'],
  financial_analyst: ['performance_reporting', 'risk_reporting', 'broker_reporting', 'financial_reporting'],
  copywriter: ['content_create', 'content_edit', 'content_publish', 'media_manage'],
} as const;
