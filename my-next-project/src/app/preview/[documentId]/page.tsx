import { populate, pages } from "@/utils/strapi";
import { cache } from "react";
import { map } from "lodash";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import PageTemplate from "@/components/shared/page-template";

import "instantsearch.css/themes/satellite-min.css";

type PageParams = { params: Promise<{ documentId: string }>; searchParams: Promise<{ status: string }> };

const getPageLayout = cache(async (documentId: string, status: string) => {
  const response = await pages.findOne(documentId, { populate, status: status as any, preview: true } as any);

  const layout = response.data;

  return layout;
});

export const generateMetadata = async ({ params, searchParams }: PageParams) => {
  const { documentId } = await params;
  const { status } = await searchParams;

  const layout = await getPageLayout(documentId, status);

  if (!layout) {
    return null;
  }

  return {
    title: layout.metaData.metaTitle,
    description: layout.metaData.metaDescription,
  };
};

export default async function PreviewPage({ params, searchParams }: PageParams) {
  const { documentId } = await params;
  const { status } = await searchParams;

  const layout = await getPageLayout(documentId, status);

  if (!layout) {
    return <div className="text-center">Layout not found</div>;
  }

  return map(layout.page_template.contents, (content) => {
    switch (content.__component) {
      case "references.header":
        return <Header key={"references.header" + content.id} content={content} />;

      case "references.footer":
        return <Footer key={"references.footer" + content.id} content={content} />;

      case "placeholder.page-template":
        return <PageTemplate key={"placeholder.page-template" + content.id} contents={layout.contents} />;

      default:
        return null;
    }
  });
}
