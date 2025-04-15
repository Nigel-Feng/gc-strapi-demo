import { map } from "lodash";
import SectionRenderer from "./section-renderer";

export const PageTemplate: React.FC<any> = ({ contents }) => {
  return (
    <main className="mx-auto max-w-[1500px] space-y-5 pb-5">
      {map(contents, (content) => (
        <SectionRenderer content={content} key={"page-template" + content.id} />
      ))}
    </main>
  );
};

export default PageTemplate;
