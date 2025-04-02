import { map } from "lodash";
import Video from "./video";
import Article from "./article";
import Description from "./description";

type ProductMainContentProps = {
  subLayoutMainContent: any;
};

const ProductMainContent = ({ subLayoutMainContent }: ProductMainContentProps) => {
  return (
    <div className="space-y-8">
      {map(subLayoutMainContent, (section: any) => {
        switch (section.__component) {
          case "pdp.video":
            return <Video key={"pdp.video" + section.id} />;

          case "pdp.description":
            return <Description key={"pdp.description" + section.id} />;

          case "pdp.article":
            return <Article key={"pdp.article" + section.id} />;

          default:
            return null;
        }
      })}
    </div>
  );
};

export default ProductMainContent;
