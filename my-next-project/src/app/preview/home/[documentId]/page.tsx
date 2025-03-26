import DailyPick from "@/components/DailyPick";
import HeroBanner from "@/components/HeroBanner";
import ScrollTiles from "@/components/ScrollTiles";
import strapiRequest from "@/utils/request";
import { cache } from "react";

const getHomeLayout = cache(async (documentId: string) => {
  const response = await strapiRequest(
    `/api/homes/${documentId}?populate[0]=sections&populate[1]=sections.button&populate[2]=metaData&populate[3]=sections.bgImage&populate[4]=sections.tiles`
  );

  const layout = response.data.data;

  return layout;
});

type PageParams = { params: Promise<{ documentId: string }> };

export const generateMetadata = async ({ params }: PageParams) => {
  const { documentId } = await params;

  const layout = await getHomeLayout(documentId);

  return {
    title: layout.metaData.metaTitle,
    description: layout.metaData.metaDescription,
  };
};

async function Home({ params }: PageParams) {
  const { documentId } = await params;

  const layout = await getHomeLayout(documentId);

  if (!layout) {
    return <div className="my-32">can not get layout from strapi.</div>;
  }

  return (
    <div>
      <div className="space-y-5 mx-auto max-w-[1500px] py-5">
        {layout.sections.map((section: any) => {
          switch (section.__component) {
            case "home.hero-banner":
              return <HeroBanner key={section.id} data={section} />;

            case "home.scroll-tiles":
              return <ScrollTiles key={section.id} data={section} />;

            case "home.daily-pick":
              return <DailyPick key={section.id} data={section} />;

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}

export default Home;
