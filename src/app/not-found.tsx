import Image from "next/image";
import Link from "next/link";
import error404 from "@/public/error-page.svg";

export default function NotFound() {
  return (
    <div className="lg:flex lg:justify-around">
      <div className=" p-8 ">
        <Image src={error404} alt="not found" />
      </div>
      <div className="flex items-center justify-center flex-col gap-3 lg:gap-7">
        <p className="text-4xl lg:text-[3.5rem]">Page not found 404</p>
        <Link
          className=" bg-slate-900 text-white py-1 px-2 rounded-md lg:text-3xl"
          href={"/"}
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
