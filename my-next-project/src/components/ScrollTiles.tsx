import { map } from "lodash";

type HeroTile = {
  altText: string;
  ctaText: string;
  heading: string;
  href: string;
  imageSrc: string;
  tagline: string;
};

type ScrollTilesProps = {
  data: { tiles: HeroTile[] };
};

const ScrollTiles: React.FC<ScrollTilesProps> = ({ data }) => {
  return (
    <div className="mx-auto max-w-[1500px]">
      <div className="flex flex-nowrap gap-4 ps-4 legacy:ps-5 min-[1500px]:ps-0 overflow-x-auto [webkit-overflow-scrolling:touch]">
        {map(data.tiles, (tile, index) => (
          <a href={tile.href} key={index} className="flex-shrink-0">
            <div
              style={{ backgroundImage: `url(${tile.imageSrc})` }}
              className="relative flex items-center w-[344px] h-[172px] legacy:w-[476px] legacy:h-[238px] min-[1500px]:w-[489px] bg-cover"
            >
              <div className="p-4 legacy:p-6 pe-0 h-full z-10 flex flex-col gap-1 legacy:gap-2 justify-between text-white w-1/2">
                <div className="flex flex-col gap-1">
                  <p
                    role="heading"
                    aria-level={3}
                    className="text-lg legacy:text-2xl leading-5 legacy:leading-[1.625rem] font-bold"
                    dangerouslySetInnerHTML={{ __html: tile.heading }}
                  />
                  {tile.tagline && (
                    <p className="text-base font-normal leading-5" dangerouslySetInnerHTML={{ __html: tile.tagline }} />
                  )}
                </div>
                {tile.ctaText && (
                  <p className="text-base leading-4 font-semibold" dangerouslySetInnerHTML={{ __html: tile.ctaText }} />
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ScrollTiles;
