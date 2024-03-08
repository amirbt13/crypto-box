"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { KeyboardEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import { validation } from "@/utils/validations/searchValidation";
import searchIcon from "@/public/icons/search.svg";
import spinner from "@/public/spinner.svg";

const Search = () => {
  const router = useRouter();

  const btnRef = useRef<HTMLButtonElement | null>(null);

  const [searchStr, setSearchStr] = useState("");

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      btnRef.current?.click();
    }
  };

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
        onKeyUp={handleKeyPress}
        value={searchStr}
        onChange={(e) => setSearchStr(e.target.value)}
        placeholder="for example bitcoin"
        className=" p-1 rounded-s-md border-2 border-slate-700 border-solid focus:border-dashed focus-within:outline-none"
      />
      <button
        className=" bg-cyan-900 rounded-e-md"
        onClick={submit}
        ref={btnRef}
      >
        <Image src={searchIcon} width={40} height={40} alt="search" />
      </button>
    </div>
  );
};

export default Search;
