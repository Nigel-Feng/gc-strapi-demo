import { populate, pages } from "@/utils/request";
import { cache } from "react";
import { map } from "lodash";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import PencilBanner from "@/components/shared/pencil-banner";
import PageTemplate from "@/components/shared/page-template";

import "instantsearch.css/themes/satellite-min.css";

const getPageLayout = cache(async (documentId: string) => {
  const response = await pages.findOne(documentId, { populate: populate });

  const layout = response.data;

  return layout;
});

export const generateMetadata = async ({ params }: PageParams) => {
  const { documentId } = await params;

  const layout = await getPageLayout(documentId);

  if (!layout) {
    return null;
  }

  return {
    title: layout.metaData.metaTitle,
    description: layout.metaData.metaDescription,
  };
};

type PageParams = { params: Promise<{ documentId: string }> };

export default async function PreviewPage({ params }: PageParams) {
  const { documentId } = await params;

  const layout = await getPageLayout(documentId);

  if (!layout) {
    return <div className="text-center">Layout not found</div>;
  }

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
