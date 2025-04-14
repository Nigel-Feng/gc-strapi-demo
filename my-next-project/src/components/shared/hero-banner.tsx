import Button from "@/components/shared/button";

const HeroBanner: React.FC<{ data: any }> = ({ data }) => {
  return (
    <a
      className="relative flex flex-col md:flex-row items-center aspect-[1500/488] bg-contain"
      href={data.linkUrl}
      style={{
        backgroundImage: `url(${data.bgImageUrl})`,
      }}
    >
      <div className="bg-[#161616] md:!bg-transparent p-6 z-10 flex flex-col gap-1 md:gap-2 justify-center text-white w-full md:w-1/2">
        <div
          role="heading"
          aria-level={2}
          className="text-[2.125rem] leading-9 md:text-4xl  md:text-[2.75rem] md:leading-[3rem] font-black"
        >
          {data.title}
        </div>
        <div
          role="heading"
          aria-level={3}
          className="text-[1.75rem] leading-9 md:text-[2.5rem] md:leading-10 font-black"
        >
          {data.subHeading}
        </div>
        <p className="my-1 md:my-2 text-lg font-normal leading-6">{data.description}</p>

        {data.buttonText && <Button text={data.buttonText as string} className="w-40" />}
      </div>
    </a>
  );
};

export default HeroBanner;
