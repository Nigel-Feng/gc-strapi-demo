import axios from "axios";
import { find } from "lodash";

const DailyPick = async ({ data }: any) => {
  //   const data = axios .get();
  const queryResult = await axios.get(data.queryUrl, { baseURL: "https://tl1-www.guitarcenter.com/rest/model" });

  const emData = queryResult.data ?? {};

  if (emData?.emPageData?.Section) {
    const Section = emData.emPageData.Section;

    // Find mobile image and products section
    const mobileImg: any = find(Section, ["cartridge", "MobileImage"]);
    const productsSection: any = find(Section, ["cartridge", "MobileTargetter"]);

    // Check if both mobile image and products data are missing
    if (!mobileImg?.imageUrl || !productsSection?.products?.length) {
      return null;
    }

    const products = productsSection.products;

    const formatData = {
      title: products[0].displayName,
      marketingImageSrc: data.marketingImageSrc,
      marketingMobileImageSrc: data.marketingMobileImageSrc,
      marketingTabletImageSrc: data.marketingTabletImageSrc,
      featuredDealsLink: data.featuredDealsLink || "/Daily-Pick.gc?icid=LP6669",
      altTextMarketingImageSrc: mobileImg.imageAlt || "",
      pick: {
        altText: mobileImg.imageAlt || products[0].displayName,
        href: products[0].path,
        imageSrc: products[0].thumb,
        name: products[0].displayName,
        price: products[0].regularPrice,
        salePrice: products[0].price,
        savings: products[0].savings,
      },
    };

    return (
      <div className="flex flex-col md:flex-row md:flex-wrap">
        <a className="flex w-full md:w-auto" href={formatData.featuredDealsLink}>
          <picture className="w-full">
            <source media={`(max-width: 667px)`} srcSet={formatData.marketingMobileImageSrc} />
            <source media={`(min-width: 668px) and (max-width: 975}px)`} srcSet={formatData.marketingTabletImageSrc} />
            <source media={`(min-width: 976px)`} srcSet={formatData.marketingImageSrc} />
            <img
              height={337}
              width={213}
              src={formatData.marketingImageSrc}
              alt={formatData.altTextMarketingImageSrc}
              className="w-full md:w-auto md:max-h-[318px] lg:max-h-[341px]"
            />
          </picture>
        </a>
        <div className="flex flex-col py-[.5%] pr-[10%] pl-[4%] md:p-0 sm:flex-row items-center justify-center border-[#ccc] md:border-t border-s md:border-s-0 border-e border-b flex-1">
          <div className="w-full sm:w-[32.5%] sm:me-[2.5%] md:me-[6.5%] md:mb-0">
            <img
              className="stretch mx-auto w-[250px] sm:max-w-[225px] md:max-w-[250px] h-[250px] sm:max-h-[225px] md:max-h-[250px]"
              src={formatData.pick.imageSrc}
              alt={formatData.pick.altText}
            />
          </div>
          <div className="flex flex-col w-full sm:w-[52.5%] sm:ms-[2.5%] mb-[3%] md:mb-0 sm:flex-row max-sm:items-center text-center sm:text-start flex-wrap">
            <div className="border border-[#333] group-hover:text-[#2d2d2d] font-medium py-[5px] px-2.5 mb-2.5 text-[19px] w-fit">
              Save: {formatData.pick.savings}
            </div>
            <a href={formatData.pick.href} className="basis-full text-xs font-normal text-[#333] hover:underline">
              {formatData.pick.name}
            </a>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-x-[40px]">
              <p className="basis-auto text-[46px] font-bold text-[#cc0000] mx-[5px]">{formatData.pick.salePrice}</p>
              <dl className="text-[#b5b3b3] text-base font-semibold whitespace-nowrap">
                <dt>Regular Price:</dt>
                <dd>{formatData.pick.price}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default DailyPick;
