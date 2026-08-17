export type TradingViewPlatform = {
  slug: string;
  name: string;
  description: string;
  features: string[];
  setup: string[];
  cta: string;
};

export const tradingViewPlatforms: TradingViewPlatform[] = [
  {
    slug: 'zignaly',
    name: 'Zignaly',
    description: 'Connect Arcus Strategy to Zignaly and turn TradingView strategy alerts into automated execution on supported exchanges.',
    features: ['Automated strategy execution', 'Cloud-based trading', 'Multiple exchange support', 'Real-time webhook processing', 'Secure API integration'],
    setup: ['Subscribe to Arcus Strategy.', 'Create your Zignaly account.', 'Connect your exchange API.', 'Import the Arcus Strategy webhook.', 'Activate automated trading.'],
    cta: 'Connect with Zignaly',
  },
  {
    slug: 'cryptohopper',
    name: 'Cryptohopper',
    description: 'Transform Arcus Strategy TradingView webhook alerts into automated trade execution through your configured Cryptohopper workflow.',
    features: ['Webhook automation', 'Cloud trading', 'Portfolio management', 'Exchange connectivity', '24/7 automated execution'],
    setup: ['Subscribe to Arcus Strategy.', 'Create your Cryptohopper account.', 'Connect your exchange.', 'Paste the webhook URL.', 'Enable your automation.'],
    cta: 'Connect with Cryptohopper',
  },
  {
    slug: '3commas',
    name: '3Commas',
    description: 'Deploy Arcus Strategy into a 3Commas automation workflow using TradingView webhook alerts and your connected exchange.',
    features: ['TradingView webhook support', 'Smart Trade automation', 'Exchange API integration', 'Risk management controls', 'Continuous monitoring'],
    setup: ['Subscribe to Arcus Strategy.', 'Connect your exchange to 3Commas.', 'Configure webhook alerts.', 'Activate the strategy.'],
    cta: 'Connect with 3Commas',
  },
  {
    slug: 'relay',
    name: 'Relay',
    description: 'Use Relay to receive TradingView webhook alerts from Arcus Strategy and automate supported trading actions with a simple workflow.',
    features: ['Fast webhook processing', 'Automated execution', 'Easy setup', 'Secure workflow automation'],
    setup: ['Subscribe to Arcus Strategy.', 'Create a Relay account.', 'Configure webhook automation.', 'Start automated trading.'],
    cta: 'Connect with Relay',
  },
  {
    slug: 'dash2trade',
    name: 'Dash2Trade',
    description: "Combine Dash2Trade's analytical capabilities with Arcus Strategy's TradingView strategy through webhook-based automation.",
    features: ['Strategy automation', 'Market intelligence', 'Signal execution', 'Risk monitoring'],
    setup: ['Subscribe to Arcus Strategy.', 'Configure Dash2Trade.', 'Add the Arcus Strategy webhook.', 'Begin automated execution.'],
    cta: 'Connect with Dash2Trade',
  },
  {
    slug: 'alpha-insider',
    name: 'Alpha Insider',
    description: 'Connect your Alpha Insider workflow to Arcus Strategy and automate trading through TradingView webhook technology.',
    features: ['Automated trading', 'Professional execution', 'Secure account connection', 'Cloud-based automation'],
    setup: ['Subscribe to Arcus Strategy.', 'Create an Alpha Insider account.', 'Connect your broker.', 'Activate the strategy.'],
    cta: 'Connect with Alpha Insider',
  },
  {
    slug: 'wundertrading',
    name: 'WunderTrading',
    description: 'Integrate Arcus Strategy with WunderTrading to automate supported cryptocurrency trading using TradingView webhook alerts.',
    features: ['TradingView integration', 'Multi-exchange support', 'Portfolio automation', 'Cloud execution', 'Webhook trading'],
    setup: ['Subscribe to Arcus Strategy.', 'Create your WunderTrading account.', 'Connect your exchange.', 'Configure webhook alerts.', 'Activate automated trading.'],
    cta: 'Connect with WunderTrading',
  },
];

export function getTradingViewPlatform(slug: string) {
  return tradingViewPlatforms.find((platform) => platform.slug === slug);
}
