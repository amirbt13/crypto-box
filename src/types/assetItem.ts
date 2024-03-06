type NumericObject = {
  [key: string]: number;
};

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
  priceChangePercent: {
    _24h: number;
    _7d: number;
    _14d: number;
    _30d: number;
    _60d: number;
    _200d: number;
    _1y: number;
  };
  currentPrice: NumericObject;
}

export default TAssetItem;
