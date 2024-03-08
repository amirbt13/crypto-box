import Image from "next/image";
import formatPrice from "@/utils/helper/numSeprator";
import triangleUp from "@/public/icons/triangle-up.svg";
import triangleDown from "@/public/icons/triangle-down.svg";
import { TObject } from "@/types/assetItem";

interface Props {
  priceChangePercent: TObject<number>;
  currentPrice: TObject<number>;
}

const Price: React.FC<Props> = ({ priceChangePercent, currentPrice }) => {
  return (
    <div className="flex gap-1 text-4xl lg:text-[3rem] items-center ">
      <p>{formatPrice(currentPrice.usd)}</p>
      <p>USD</p>
      <Image
        src={priceChangePercent._24h > 0 ? triangleUp : triangleDown}
        alt="triangle"
        width={30}
        height={30}
      />
      <span className="text-sm">
        {priceChangePercent._24h.toFixed(2)}% in 24h
      </span>
    </div>
  );
};

export default Price;
