import ChangePercent from "@/components/modules/asset/change-percents/ChangePercent";
import Description from "@/components/modules/asset/description/Description";
import InfoTable from "@/components/modules/asset/info-table/InfoTable";
import Links from "@/components/modules/asset/links/Links";
import Price from "@/components/modules/asset/price/Price";
import TAssetItem from "@/types/assetItem";

import Image from "next/image";

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
    links,
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
        <Price
          currentPrice={currentPrice}
          priceChangePercent={priceChangePercent}
        />
        <ChangePercent priceChangePercent={priceChangePercent} />
        <InfoTable marketCap={marketCap} marketCapRank={marketCapRank} />
        <Links links={links} />
        {description ? <Description desc={description} /> : null}
      </div>
    </div>
  );
};

export default AssetPage;
