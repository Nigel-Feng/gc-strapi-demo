import { populate, pages } from "@/utils/request";
import { cache } from "react";
import { map } from "lodash";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import PencilBanner from "@/components/shared/pencil-banner";
import PageTemplate from "@/components/shared/page-template";

import "instantsearch.css/themes/satellite-min.css";

const getPageLayout = cache(async (seoUrl = "/") => {
  const response = await pages.find({ populate: populate, filters: { seoUrl } });

  const layout = response.data?.[0];

  return layout;
});

export const generateMetadata = async ({ searchParams }: PageParams) => {
  const { seoUrl } = await searchParams;

  const layout = await getPageLayout(seoUrl);

  return {
    title: layout.metaData.metaTitle,
    description: layout.metaData.metaDescription,
  };
};

type PageParams = { searchParams: Promise<{ seoUrl: string }> };

export default async function PreviewPage({ searchParams }: PageParams) {
  const { seoUrl } = await searchParams;

  const layout = await getPageLayout(seoUrl);

  console.log(seoUrl);

  console.log(JSON.stringify(layout, null, 2));

  return map(layout.page_template.contents, (content) => {
    switch (content.__component) {
      case "references.header":
        return <Header key={"references.header" + content.id} content={content} />;

      case "ab-test.pencil-banner":
        return <PencilBanner key={"ab-test.pencil-banner" + content.id} content={content} />;

      case "references.footer":
        return <Footer key={"references.footer" + content.id} content={content} />;

      case "placeholder.page-template":
        return <PageTemplate key={"placeholder.page-template" + content.id} contents={layout.contents} />;

      default:
        return null;
    }
  });
}
