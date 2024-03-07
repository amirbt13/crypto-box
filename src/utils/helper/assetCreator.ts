import TAssetItem from "@/types/assetItem";

const assetCreator = (data: any): TAssetItem => {
  return {
    name: data.name,
    id: data.id,
    symbol: data.symbol,
    image: data.image,
    marketCap: data.market_data.market_cap.usd,
    marketCapRank: data.market_data.market_cap_rank,
    description: data.description.en,
    tickers: data.tickers,
    priceChangePercent: {
      _24h: data.market_data.price_change_percentage_24h,
      _7d: data.market_data.price_change_percentage_7d,
      _14d: data.market_data.price_change_percentage_14d,
      _30d: data.market_data.price_change_percentage_30d,
      _60d: data.market_data.price_change_percentage_60d,
      _200d: data.market_data.price_change_percentage_200d,
      _1y: data.market_data.price_change_percentage_1y,
    },
    currentPrice: data.market_data.current_price,
    links: data.links,
  };
};

export default assetCreator;
