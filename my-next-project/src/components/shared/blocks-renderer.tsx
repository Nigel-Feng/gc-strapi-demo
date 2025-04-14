import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const BlocksRender: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="prose blocks-render max-w-none">
      <BlocksRenderer content={data.content} />
    </div>
  );
};

export default BlocksRender;
