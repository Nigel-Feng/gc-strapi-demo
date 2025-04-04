import strapiRequest from "@/utils/request";
import { cache } from "react";
import { Metadata } from "next";
import { map } from "lodash";
import Breadcrumb from "@/utils/breadcrumb";
import ProductPrimaryRow from "@/components/pdp/product-primary-row";
import ProductMainContent from "@/components/pdp/product-main-content";

const getPDPLayout = cache(async (documentId: string) => {
  const response = await strapiRequest(`/api/product-detail-pages/${documentId}?populate=*`);

  const layout = response.data.data;

  return layout;
});

type PageParams = { params: Promise<{ documentId: string }> };

export const metadata: Metadata = {
  title: "GC Strapi PDP Demo",
  description: "Generated by create next app",
};

async function ProductListingPage({ params }: PageParams) {
  const { documentId } = await params;

  const layout = await getPDPLayout(documentId);

  if (!layout) {
    return <div className="my-32">can not get layout from strapi.</div>;
  }

  return (
    <div>
      <div className="space-y-5 mx-auto max-w-[1500px] py-8">
        {map(layout.layout, (section: any) => {
          switch (section.__component) {
            case "shared.breadcrumb":
              return <Breadcrumb key={"shared.breadcrumb" + section.id} />;

            case "pdp.product-primary-row":
              return (
                <ProductPrimaryRow
                  key={"pdp.product-primary-row" + section.id}
                  subLayoutPrimaryRow={layout.subLayoutPrimaryRow}
                  subLayoutProductDetail={layout.subLayoutProductDetail}
                />
              );

            case "pdp.product-main-content":
              return (
                <ProductMainContent
                  key={"pdp.product-main-content" + section.id}
                  subLayoutMainContent={layout.subLayoutMainContent}
                />
              );

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}

export default ProductListingPage;
