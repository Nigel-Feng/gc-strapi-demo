import HeroBanner from "./hero-banner";
import ShopByCategories from "./shop-by-categories";
import DailyPick from "./daily-pick";
import Breadcrumb from "./breadcrumb";
import BlocksRender from "./blocks-renderer";
import MainContent from "../plp/main-content";
import { map } from "lodash";
import Gallery from "../pdp/gallery";
import Price from "../pdp/product-detail/price";
import Title from "../pdp/product-detail/title";
import CTA from "../pdp/product-detail/cta";
import DeliveryAndStore from "../pdp/product-detail/delivery-and-store";
import Video from "../pdp/product-main-content/video";
import Description from "../pdp/product-main-content/description";
import Article from "../pdp/product-main-content/article";

const classNameMap: Record<string, string> = {
  "pdp sub layout primary row":
    "flex w-full border-[#dbdcde] border-t [&>:last-child]:border-l [&>:last-child]:border-[#dbdcde]",
  "pdp sub layout product detail": "px-8 py-4 space-y-4 basis-[488px] flex-none",
  "pdp sub layout main content": "space-y-8",
};

const NestedLayout: React.FC<any> = ({ data }) => {
  const className = classNameMap[data.name] || "";

  return (
    <div className={className || (data.type === "horizontal" ? "flex" : undefined)}>
      {map(data.contents, (content) => (
        <SectionRenderer content={content} key={"nested-layout" + content.id} />
      ))}
    </div>
  );
};

const SectionRenderer: React.FC<any> = ({ content }) => {
  switch (content.__component) {
    case "references.banner":
      return <HeroBanner key={"references.banner" + content.id} data={content.banner} />;

    case "shared.shop-by-categories":
      return <ShopByCategories key={"home.scroll-tiles" + content.id} data={content} />;

    case "shared.daily-pick":
      return <DailyPick key={"home.daily-pick" + content.id} data={content} />;

    case "shared.breadcrumb":
      return <Breadcrumb key={"shared.breadcrumb" + content.id} />;

    case "shared.html":
      return <BlocksRender key={"shared.html" + content.id} data={content} />;

    case "plp.results":
      return <MainContent key={"plp.results" + content.id} data={content} />;

    case "references.nested-layout":
      return <NestedLayout key={"references.nested-layout" + content.id} data={content.nested_layout} />;

    case "pdp.gallery":
      return <Gallery key={"pdp.gallery" + content.id} />;

    case "pdp.price":
      return <Price key={"pdp.price" + content.id} />;

    case "pdp.title":
      return <Title key={"pdp.title" + content.id} />;

    case "pdp.cta-button":
      return <CTA key={"pdp.cta-button" + content.id} />;

    case "pdp.delivery-and-store":
      return <DeliveryAndStore key={"pdp.delivery-and-store" + content.id} />;

    case "pdp.video":
      return <Video key={"pdp.video" + content.id} />;

    case "pdp.description":
      return <Description key={"pdp.description" + content.id} />;

    case "pdp.article":
      return <Article key={"pdp.article" + content.id} />;

    default:
      return null;
  }
};

export default SectionRenderer;
