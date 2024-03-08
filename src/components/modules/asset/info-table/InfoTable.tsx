import formatPrice from "@/utils/helper/numSeprator";
import Divider from "../../shared/Divider";

interface Props {
  marketCap: number;
  marketCapRank: number;
}

const InfoTable: React.FC<Props> = ({ marketCap, marketCapRank }) => {
  return (
    <div className=" border-[#7a7979] border p-4 rounded-md flex flex-col gap-4 bg-slate-200 lg:w-1/2">
      <div className="flex justify-between">
        <p>Market Cap: </p>
        <p>{formatPrice(marketCap)}$</p>
      </div>
      <Divider h="1px" color="#7a7979" />
      <div className="flex justify-between">
        <p>Market Cap Rank: </p>
        <p>{marketCapRank}</p>
      </div>
    </div>
  );
};

export default InfoTable;
