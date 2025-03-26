import BlocksRender from "@/components/BlocksRender";
import ShopByBrand from "@/components/ShopByBrand";
import ShopByCategory from "@/components/ShopByCategory";
import strapiRequest from "@/utils/request";
import { cache } from "react";

const getPLPLayout = cache(async (documentId: string) => {
  const response = await strapiRequest(
    `/api/product-listing-pages/${documentId}?populate[0]=metaData&populate[1]=topPromotion.button&populate[2]=topPromotion.brands&populate[3]=topPromotion.brands.image&populate[4]=topPromotion.categories&populate[5]=bottomPromotion`
  );

  const layout = response.data.data;

  return layout;
});

type PageParams = { params: Promise<{ documentId: string }> };

export const generateMetadata = async ({ params }: PageParams) => {
  const { documentId } = await params;

  const layout = await getPLPLayout(documentId);

  return {
    title: layout.metaData.metaTitle,
    description: layout.metaData.metaDescription,
  };
};

async function ProductListingPage({ params }: PageParams) {
  const { documentId } = await params;

  const layout = await getPLPLayout(documentId);

  if (!layout) {
    return <div className="my-32">can not get layout from strapi.</div>;
  }

  return (
    <div>
      <div className="space-y-5 mx-auto max-w-[1500px] py-8">
        {layout.topPromotion.map((section: any) => {
          switch (section.__component) {
            case "plp.shop-by-brand":
              return <ShopByBrand key={section.id} data={section} />;

            case "plp.shop-by-category":
              return <ShopByCategory key={section.id} data={section} />;

            default:
              return null;
          }
        })}

        <div className="flex gap-4">
          <div className="bg-[#e7e7e7] h-[300px] w-[280px] flex items-center justify-center">
            <span>plp facets section</span>
          </div>
          <div className="bg-[#e7e7e7] h-[300px] w-full flex items-center justify-center">
            <span>plp results section</span>
          </div>
        </div>

        {layout.bottomPromotion.map((section: any) => {
          switch (section.__component) {
            case "shared.html":
              return <BlocksRender key={section.id} data={section} />;

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}

export default ProductListingPage;
