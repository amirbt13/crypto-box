"use client";
import { useState } from "react";

interface Props {
  desc: string;
}

const Description: React.FC<Props> = ({ desc }) => {
  const [fullShown, setFullShown] = useState(false);
  return (
    <div className=" relative">
      <div
        className={` overflow-hidden transition-all duration-200 ease-in-out  ${
          fullShown ? "max-h-full" : "max-h-48"
        }`}
      >
        <p dangerouslySetInnerHTML={{ __html: desc }} className=" pb-8"></p>
      </div>
      <div className=" w-full rounded-b h-12 from-transparent to-slate-200 bg-gradient-to-b absolute bottom-[-5px] flex items-end justify-center">
        <button
          onClick={() => setFullShown(!fullShown)}
          className=" bg-slate-900 text-white text-sm py px-1 rounded-lg hover:shadow-md hover:shadow-slate-400"
        >
          {fullShown ? "close" : "show more"}
        </button>
      </div>
    </div>
  );
};

export default Description;
