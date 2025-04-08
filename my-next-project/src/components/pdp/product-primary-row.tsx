import { map } from "lodash";
import Gallery from "./gallery";
import ProductDetail from "./product-detail";

type ProductPrimaryRowProps = {
  subLayoutPrimaryRow: any;
  subLayoutProductDetail: any;
  imageSrc: string;
};

const ProductPrimaryRow = ({ subLayoutPrimaryRow, subLayoutProductDetail, imageSrc }: ProductPrimaryRowProps) => {
  return (
    <div className="flex w-full border-[#dbdcde] border-t [&>:last-child]:border-l [&>:last-child]:border-[#dbdcde]">
      {map(subLayoutPrimaryRow, (section: any) => {
        switch (section.__component) {
          case "pdp.gallery":
            return (
              <section key={"pdp.gallery" + section.id} className="px-2 pt-4 pb-8 basis-full flex-auto sticky top-0">
                <Gallery imageSrc={imageSrc} />
              </section>
            );

          case "pdp.product-detail":
            return (
              <section key={"pdp.product-detail" + section.id} className="px-8 py-4 space-y-4 basis-[488px] flex-none">
                <ProductDetail subLayoutProductDetail={subLayoutProductDetail} />
              </section>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default ProductPrimaryRow;
