import AssetPage from "@/components/templates/asset/AssetPage";
import TAssetItem from "@/types/assetItem";
import assetCreator from "@/utils/helper/assetCreator";
import { notFound } from "next/navigation";

interface Props {
  params: { assetName: string };
}

const Asset: React.FC<Props> = async ({ params }) => {
  const { assetName } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/coins/${assetName}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  //   console.log(data.tickers);
  if ("error" in data || res.status === 500) {
    notFound();
  } else {
    const assetItem: TAssetItem = assetCreator(data);

    return <AssetPage asset={assetItem} />;
  }
};

export default Asset;
