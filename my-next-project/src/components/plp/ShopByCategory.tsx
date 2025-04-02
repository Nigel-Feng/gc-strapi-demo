import { map } from "lodash";

const ShopByCategory: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-4">
        {map(data.categories, (category) => {
          return (
            <a href={category.seoUrl} key={category.id} className="flex flex-col w-32 items-center py-1 flex-none">
              <span className="w-full aspect-square">
                <img src={category.imageUrl} alt={category.name} />
              </span>
              <span className="flex-none font-bold text-center">{category.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ShopByCategory;
