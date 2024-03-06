import Search from "@/components/modules/home/search/Search";
import React from "react";

const HomePage = () => {
  return (
    <div className=" min-h-dvh bg-slate-100 flex flex-col gap-10 items-center">
      <div className="text-4xl pt-4">
        <h1>Crypto Box</h1>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2 className=" text-lg">Search Asset Name</h2>
        <Search />
      </div>
    </div>
  );
};

export default HomePage;
