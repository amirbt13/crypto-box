import TAssetItem from "@/types/assetItem";
import formatPrice from "@/utils/helper/numSeprator";
import Image from "next/image";
import triangleUp from "@/public/icons/triangle-up.svg";
import triangleDown from "@/public/icons/triangle-down.svg";

interface Props {
  asset: TAssetItem;
}

const AssetPage: React.FC<Props> = ({ asset }) => {
  const {
    name,
    id,
    symbol,
    image,
    marketCap,
    marketCapRank,
    description,
    tickers,
    priceChangePercent,
    currentPrice,
  } = asset;

  return (
    <div>
      <div className="flex flex-col gap-4 m-4 p-2 ">
        <div>
          <Image
            src={image.large}
            alt={name}
            width={100}
            height={100}
            priority={true}
            quality={60}
          />
        </div>
        <div className="flex gap-1 items-center">
          <Image src={image.thumb} alt={name} width={20} height={20} />
          <h1 className=" text-2xl">{name}</h1>
          <p className=" text-sm opacity-60">{symbol.toUpperCase()}</p>
        </div>
        <div className="flex gap-1 text-4xl items-center">
          <p>{formatPrice(currentPrice.usd)}</p>
          <p>USD</p>
          <Image
            src={priceChangePercent._24h > 0 ? triangleUp : triangleDown}
            alt="triangle"
            width={30}
            height={30}
          />
          <span className="text-sm">{priceChangePercent._24h.toFixed(2)}%</span>
        </div>
      </div>
    </div>
  );
};

export default AssetPage;
