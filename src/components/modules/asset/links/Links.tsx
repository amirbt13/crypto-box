import { TObject } from "@/types/assetItem";
import Link from "next/link";

interface Props {
  links: TObject<string[] | string>;
}

const Links: React.FC<Props> = ({ links }) => {
  const { homepage, whitepaper } = links;
  return (
    <div>
      <h2>Links</h2>
      <div className="flex gap-3">
        <Link
          className="  border-2 border-slate-900 text-sm py-1 px-2 rounded"
          href={homepage[0]}
        >
          Home Page
        </Link>
        <Link
          className="  border-2 border-slate-900 text-sm py-1 px-2 rounded"
          href={typeof whitepaper === "string" ? whitepaper : whitepaper[0]}
        >
          whitepaper
        </Link>
      </div>
    </div>
  );
};

export default Links;
