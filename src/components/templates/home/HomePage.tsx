import Search from "@/components/modules/home/search/Search";
import React from "react";

const HomePage = () => {
  return (
    <div className=" min-h-dvh  flex flex-col gap-10 lg:gap-20 items-center lg:justify-center">
      <div className="text-4xl pt-4 lg:text-[5rem]">
        <h1>Crypto Box</h1>
      </div>
      <div className="flex flex-col items-center gap-2 lg:gap-8">
        <h2 className=" text-lg lg:text-3xl">Search Asset Name</h2>
        <Search />
      </div>
    </div>
  );
};

export default HomePage;
