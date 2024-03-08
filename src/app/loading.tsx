import Image from "next/image";
import spinner from "@/public/spinner.svg";

const loading = () => {
  return (
    <div className=" w-full h-dvh flex items-center justify-center">
      <Image src={spinner} alt="loading" />
    </div>
  );
};

export default loading;
