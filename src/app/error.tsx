"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import error500 from "@/public/error500.svg";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="p-2">
        <Image src={error500} alt="error" />
      </div>
      <h1 className=" text-4xl">Something went wrong</h1>
      <div className="flex gap-2 items-center">
        <Link
          className=" bg-slate-900 text-white rounded-md py-1 px-2"
          href={"/"}
        >
          Return Home
        </Link>
        <button
          className="border-2 border-slate-900 rounded-md py-1 px-2"
          onClick={() => reset()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
