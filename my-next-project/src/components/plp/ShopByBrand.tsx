import { map } from "lodash";

const HeroBanner: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="overflow-x-scroll">
      <div className="flex gap-4">
        {map(data.brands, (brand) => {
          return (
            <a
              href={brand.seoUrl}
              key={brand.id}
              className="flex flex-col w-52 aspect-video items-center py-1 flex-none"
            >
              <span className="h-full flex-grow-0 flex-shrink flex justify-center items-center">
                <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${brand.image.url}`}
                  alt={brand.name}
                  className="max-w-full max-h-full "
                />
              </span>
              <span className="flex-none font-bold text-center">{brand.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default HeroBanner;
