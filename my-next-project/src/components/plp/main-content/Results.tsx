"use client";

import { algoliaIndexName } from "@/config";
import { find, map } from "lodash";
import { HitsPerPage, Pagination, SortBy } from "react-instantsearch";
import { useHits } from "react-instantsearch-core";

const algoliaMainIndexName = algoliaIndexName;

export const Results = () => {
  const { results, items } = useHits();

  return (
    <section className="w-full pt-7">
      <div className="jsx-a4b6ce33d467ba38 top-facet flex flex-wrap lg:flex-nowrap justify-between py-5 md:border-none border-t border-borderNormalColor">
        <div className="sort-by mb-5 max-[350px]:ml-0 md:mb-0" id="sortBy">
          <SortBy
            items={[
              {
                label: "Top Sellers",
                value: `bS-${algoliaMainIndexName}`,
              },
              {
                label: "Customer Ratings",
                value: `oR-${algoliaMainIndexName}`,
              },
              {
                label: "Price - High to Low",
                value: `pHL-${algoliaMainIndexName}`,
              },
              {
                label: "Price - Low to High",
                value: `pLH-${algoliaMainIndexName}`,
              },
              {
                label: "Newest First",
                value: `cD-${algoliaMainIndexName}`,
              },
              {
                label: "Relevance",
                value: algoliaMainIndexName,
              },
            ]}
          />
        </div>
        <p className="jsx-a4b6ce33d467ba38 w-full md:w-auto pt-2 md:pt-0 border-t md:border-none border-borderNormalColor text-sm leading-6 md:text-base font-normal md:font-bold md:leading-[52px]">
          {results?.nbHits} matches found
        </p>
        <div className="page-size hidden md:flex items-center" id="pageSize">
          <HitsPerPage
            items={[
              { label: "12", value: 12, default: true },
              { label: "24", value: 24 },
              { label: "48", value: 48 },
            ]}
          />
        </div>
      </div>
      <div className="px-2 py-3 md:bg-[#F9F9F9] min-h-screen relative product-grid rounded-[6px]">
        <div className="flex flex-auto flex-wrap">
          {map(items, (product) => {
            const topSticker = find(product.sticker, ["type", "top"]);

            const rating = product.review?.overallRating ? Math.floor(product.review.overallRating / 2) : 0;
            const ratingStars = "★★★★★☆☆☆☆☆".slice(5 - rating, 10 - rating);

            const totalReviews = product.review.totalReviews;

            return (
              <section className="p-1.5 flex flex-none flex-col w-1/4" key={product.objectID}>
                <div className="product-item md:hover:drop-shadow-[0_3px_12px_rgba(0,0,0,0.06)] bg-[#FFF] md:py-[22px] px-0 md:px-[10px] w-[92vw] sm:w-full md:w-full md:min-h-[600px] md:h-[706px] rounded cursor-pointer flex  flex-row md:flex-col transition duration-150 ease-linear relative">
                  <div className="plp-product-gallery w-[128px] md:w-auto">
                    <div className="top flex justify-end h-6 items-center mb-[10px] px-[10px]">
                      <div className="l1-sticker h-6 first:mr-auto">
                        {topSticker && (
                          <div className="product-sticker flex items-center font-bold text-xs py-1 px-2 bg-[#333] text-[#FFF]">
                            <p className="sticker">{topSticker.name}</p>
                          </div>
                        )}
                      </div>
                      <div className="relative">
                        <span className="flex justify-center cursor-pointer wish-list-heart w-[36px] h-[36px] plp-item-wishlist block">
                          <span className="flex justify-center items-center rounded-full w-full h-full bg-white text-[#888888] hover:text-[#B30F14]">
                            <span className="anticon anticon-heart w-6 h-6 text-[24px] font-bold">
                              <svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="heart"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true"
                                role="presentation"
                              >
                                <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
                              </svg>
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="w-[264px] mt-5 md:mt-0">
                      <a href={product.seoUrl}>
                        <img
                          alt={product.displayName}
                          className="w-full h-auto aspect-square"
                          src={`https://media.guitarcenter.com/is/image/MMGS7/${product.imageId}-00-264x264.jpg`}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="jsx-8bbe5b09d939d3ef w-[68%] md:w-auto flex flex-col justify-between">
                    <div className="jsx-f0e60c587809418b plp-product-details px-[10px]">
                      <a
                        href={product.seoUrl}
                        className="product-name font-normal text-base leading-[18px] md:leading-6 text-[#2d2d2d] mb-2 md:h-[72px] h-[36px] hover:underline line-clamp-3"
                      >
                        <h2 className="">{product.displayName}</h2>
                      </a>
                      <div className="jsx-f0e60c587809418b rate flex items-end mb-2">
                        <div className="group star-container inline-block relative cursor-pointer ">
                          <div className="inline-block" aria-hidden="true">
                            {ratingStars} {totalReviews ? `(${totalReviews})` : null}
                          </div>
                        </div>
                      </div>
                      <div className="jsx-f0e60c587809418b price text-base mb-2">
                        <span className="jsx-f0e60c587809418b sale-price font-bold text-[#2d2d2d]">
                          ${product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <div className="mt-8">
        <Pagination
          className="flex justify-center items-center"
          // Optional props
          totalPages={results?.nbPages}
          padding={3}
          showFirst={true}
          showPrevious={true}
          showNext={true}
          showLast={true}
        />
      </div>
    </section>
  );
};
