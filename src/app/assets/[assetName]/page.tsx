import AssetPage from "@/components/templates/asset/AssetPage";
import TAssetItem from "@/types/assetItem";

interface Props {
  params: { assetName: string };
}

const Asset: React.FC<Props> = async ({ params }) => {
  const { assetName } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/coins/${assetName}`,
    {}
  );
  const data = await res.json();
  //   console.log(data.tickers);
  const assetItem: TAssetItem = {
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

  return <AssetPage asset={assetItem} />;
};

export default Asset;
