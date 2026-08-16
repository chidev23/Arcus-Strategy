export type Broker = {
  name: string;
  slug: string;
  status: 'Available' | 'Coming soon';
};

// The broker names below reflect the broker set previously used across Arcus materials.
// Replace or reorder these values from the admin configuration when the final broker roster is confirmed.
export const mt4Brokers: Broker[] = [
  { name: 'Hantec Markets', slug: 'hantec-markets', status: 'Available' },
  { name: 'FP Markets', slug: 'fp-markets', status: 'Available' },
  { name: 'Vantage Markets', slug: 'vantage-markets', status: 'Available' },
  { name: 'RoboForex', slug: 'roboforex', status: 'Available' },
  { name: 'Tickmill', slug: 'tickmill', status: 'Available' },
  { name: 'Admirals', slug: 'admirals', status: 'Available' },
  { name: 'Forex.com', slug: 'forex-com', status: 'Available' },
  { name: 'MultiBank Group', slug: 'multibank-group', status: 'Available' },
  { name: 'ThinkMarkets', slug: 'thinkmarkets', status: 'Available' },
  { name: 'HYCM', slug: 'hycm', status: 'Available' },
];

export const mt5Brokers: Broker[] = mt4Brokers.map((broker) => ({ ...broker }));

export const pammBrokers: Broker[] = [
  { name: 'Hantec Markets', slug: 'hantec-markets', status: 'Available' },
  { name: 'FP Markets', slug: 'fp-markets', status: 'Available' },
  { name: 'Vantage Markets', slug: 'vantage-markets', status: 'Available' },
  { name: 'RoboForex', slug: 'roboforex', status: 'Available' },
  { name: 'Tickmill', slug: 'tickmill', status: 'Available' },
];

export const mamBrokers: Broker[] = pammBrokers.map((broker) => ({ ...broker }));

export const singleBrokers = {
  synthetic: { name: 'Deriv', slug: 'deriv', status: 'Available' as const },
  ctrader: { name: 'cTrader', slug: 'ctrader', status: 'Available' as const },
};

export function getBroker(list: Broker[], slug: string) {
  return list.find((broker) => broker.slug === slug);
}
