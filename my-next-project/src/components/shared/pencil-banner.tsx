import getGrowthbook from "@/utils/growthbook";
import { cookies } from "next/headers";

export const PencilBanner: React.FC<any> = async ({ content }) => {
  const cookieStore = await cookies();
  let profileId = cookieStore.get("profile_id")?.value!;

  const userContext = { attributes: { id: profileId } };

  const result = await getGrowthbook().then((client) =>
    client.getFeatureValue("pencil_banner_demo", "pencil_banner_a", userContext)
  );

  console.log("pencil banner result", result);

  const pencilBanner = content[result];

  return <div dangerouslySetInnerHTML={{ __html: pencilBanner.htmlContent }}></div>;
};

export default PencilBanner;
