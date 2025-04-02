import Button from "@/components/shared/Button";

const HeroBanner: React.FC<{ data: any }> = ({ data }) => {
  const button = data.button?.[0];
  const image = data.bgImage.url;

  return (
    <a
      className="relative flex flex-col md:flex-row items-center md:h-[488px] md:max-h-[488px]"
      href={data.link}
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_STRAPI_URL + image})`,
      }}
    >
      <div className="bg-[#161616] md:!bg-transparent p-6 z-10 flex flex-col gap-1 md:gap-2 justify-center text-white w-full md:w-1/2">
        <div
          role="heading"
          aria-level={2}
          className="text-[2.125rem] leading-9 md:text-4xl  md:text-[2.75rem] md:leading-[3rem] font-black"
        >
          {data.heading}
        </div>
        <div
          role="heading"
          aria-level={3}
          className="text-[1.75rem] leading-9 md:text-[2.5rem] md:leading-10 font-black"
        >
          {data.subHeading}
        </div>
        <p className="my-1 md:my-2 text-lg font-normal leading-6">{data.tagLine}</p>
        <p className="font-bold text-xl md:text-2xl md:leading-[1.875rem]">{data.dateLine}</p>

        {button && <Button {...button} />}
      </div>
    </a>
  );
};

export default HeroBanner;
