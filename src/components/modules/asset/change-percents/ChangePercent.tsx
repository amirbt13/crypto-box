import { TObject } from "@/types/assetItem";

interface Props {
  priceChangePercent: TObject<number>;
}

const ChangePercent: React.FC<Props> = ({ priceChangePercent }) => {
  const changePercentsArr = Object.entries(priceChangePercent);
  //   console.log(changePercentsArr);
  return (
    <div className=" flex flex-col gap-1">
      <h2>Changes in percent</h2>
      <div className=" border border-slate-800 rounded-lg overflow-hidden">
        <div className=" grid grid-cols-7 justify-items-center  text-white">
          {changePercentsArr.map((period, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-slate-800 w-full p-1"
            >
              <p>{period[0].substring(1)}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 justify-items-center bg-slate-200">
          {changePercentsArr.map((period, index) => (
            <div key={index} className="flex justify-center items-center p-1">
              <p className={period[1] > 0 ? "text-green-600" : "text-red-600"}>
                {period[1].toFixed(1)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChangePercent;
