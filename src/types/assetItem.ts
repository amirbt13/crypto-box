export interface TObject<T> {
  [key: string]: T;
}

export interface TTicker {
  base: string;
  target: string;
  market: { name: string; identifier: string; has_trading_incentive: boolean };
  last: number;
  volume: number;
  converted_last: { btc: number; eth: number; usd: number };
  trust_score: string;
}

interface TAssetItem {
  name: string;
  id: string;
  symbol: string;
  image: { thumb: string; small: string; large: string };
  marketCap: number;
  marketCapRank: number;
  description: string;
  tickers: TTicker[];
  priceChangePercent: TObject<number>;
  currentPrice: TObject<number>;
  links: TObject<string[] | string>;
}

export default TAssetItem;
