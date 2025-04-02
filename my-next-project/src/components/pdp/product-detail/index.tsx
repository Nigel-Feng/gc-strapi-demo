import { map } from "lodash";
import Title from "./title";
import Price from "./price";
import CTA from "./cta";
import DeliveryAndStore from "./delivery-and-store";

type ProductDetailProps = {
  subLayoutProductDetail: any;
};

const ProductDetail = ({ subLayoutProductDetail }: ProductDetailProps) => {
  return (
    <>
      {map(subLayoutProductDetail, (section: any) => {
        switch (section.__component) {
          case "pdp.price":
            return <Price key={"pdp.price" + section.id} />;

          case "pdp.title":
            return <Title key={"pdp.title" + section.id} />;

          case "pdp.cta-button":
            return <CTA key={"pdp.cta-button" + section.id} />;

          case "pdp.delivery-and-store":
            return <DeliveryAndStore key={"pdp.delivery-and-store" + section.id} />;

          default:
            return null;
        }
      })}
    </>
  );
};

export default ProductDetail;
