"use client";

import Image from "next/image";
import { useState } from "react";
import searchIcon from "@/public/icons/search.svg";
import { useRouter } from "next/navigation";
import { validation } from "@/utils/validations/searchValidation";
import toast from "react-hot-toast";

const Search = () => {
  const router = useRouter();
  const [searchStr, setSearchStr] = useState("");
  const submit = () => {
    const error = validation(searchStr);
    if (error) {
      toast.error(error);
      return;
    }
    router.push(`/assets/${searchStr}`);
  };
  return (
    <div className="flex">
      <input
        value={searchStr}
        onChange={(e) => setSearchStr(e.target.value)}
        placeholder="for example bitcoin"
        className=" p-1 rounded-s-md border-2 border-slate-700 border-solid focus:border-dashed focus-within:outline-none"
      />
      <button className=" bg-cyan-900 rounded-e-md" onClick={submit}>
        <Image src={searchIcon} width={40} height={40} alt="search" />
      </button>
    </div>
  );
};

export default Search;
