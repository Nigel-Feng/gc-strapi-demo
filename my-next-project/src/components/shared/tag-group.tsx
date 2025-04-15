import { map } from "lodash";

const TagGroup: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="flex flex-col">
      <h3 className="h4 md:h3 text-2xl text-textDarkColor text-center mt-[3%] font-bold pl-4 mb-[1.5%]">
        {data.title}
      </h3>
      <ul className="w-full mx-auto grid auto-cols-[1fr] auto-rows-[1fr] grid-cols-[repeat(3,1fr)] lg:grid-cols-[repeat(6,1fr)] gap-4 justify-evenly list-none px-4">
        {map(data.tags, (category) => (
          <li key={category.id}>
            <a href={category.seoUrl} className="block">
              <div className="flex aspect-square justify-center items-center ">
                <img src={category.imageUrl} alt={category.name} className="max-w-full max-h-full" />
              </div>

              <div className="font-normal text-base pt-2 text-center">{category.name}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagGroup;
