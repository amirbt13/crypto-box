import Children from "@/types/children";
import { Toaster } from "react-hot-toast";

const Provider: React.FC<Children> = ({ children }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export default Provider;
