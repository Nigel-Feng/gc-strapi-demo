const Gallery = ({ imageSrc }: any) => {
  return (
    <>
      <div className="w-[600px] h-[600px] mx-auto">
        <img
          alt="Martin HD-28 Standard Dreadnought Acoustic Guitar Natural 1"
          src={imageSrc || "https://media.guitarcenter.com/is/image/MMGS7/M17679000001000-00-600x600.jpg"}
          className="w-[600px] h-[600px]"
          tabIndex={0}
        />
      </div>

      <div className="swiper-wrapper w-[516px] flex justify-between mx-auto mt-16">
        <div className="border-2 border-[#b30f14] flex items-center justify-center w-[60px] h-[60px] rounded">
          <img
            alt="Martin HD-28 Standard Dreadnought Acoustic Guitar Natural"
            width={50}
            height={50}
            className="rounded"
            src="https://media.guitarcenter.com/is/image/MMGS7/M17679000001000-00-86x86.jpg"
          />
        </div>

        <div className="hover:shadow-[0_3px_6px_0_rgba(0,0,0,.12)] cursor-pointer flex items-center justify-center w-[60px] h-[60px] rounded border border-[#dbdcde] hover:border-[#676767]">
          <img
            alt="Martin HD-28 Standard Dreadnought Acoustic Guitar Natural"
            width={50}
            height={50}
            className="rounded"
            src="https://media.guitarcenter.com/is/image/MMGS7/M17679000001000-01-86x86.jpg"
          />
        </div>

        <div className="hover:shadow-[0_3px_6px_0_rgba(0,0,0,.12)] cursor-pointer flex items-center justify-center w-[60px] h-[60px] rounded border border-[#dbdcde] hover:border-[#676767]">
          <img
            alt="Martin HD-28 Standard Dreadnought Acoustic Guitar Natural"
            width={50}
            height={50}
            className="rounded"
            src="https://media.guitarcenter.com/is/image/MMGS7/M17679000001000-02-86x86.jpg"
          />
        </div>

        <div className="hover:shadow-[0_3px_6px_0_rgba(0,0,0,.12)] cursor-pointer flex items-center justify-center w-[60px] h-[60px] rounded border border-[#dbdcde] hover:border-[#676767]">
          <img
            alt="Martin HD-28 Standard Dreadnought Acoustic Guitar Natural"
            width={50}
            height={50}
            className="rounded"
            src="https://media.guitarcenter.com/is/image/MMGS7/M17679000001000-03-86x86.jpg"
          />
        </div>

        <div className="hover:shadow-[0_3px_6px_0_rgba(0,0,0,.12)] cursor-pointer flex items-center justify-center w-[60px] h-[60px] rounded border border-[#dbdcde] hover:border-[#676767]">
          <img
            alt="Martin HD-28 Standard Dreadnought Acoustic Guitar Natural"
            width={50}
            height={50}
            className="rounded"
            style={{ color: "transparent" }}
            src="https://media.guitarcenter.com/is/image/MMGS7/M17679000001000-04-86x86.jpg"
          />
        </div>

        <div className="hover:shadow-[0_3px_6px_0_rgba(0,0,0,.12)] cursor-pointer flex items-center justify-center w-[60px] h-[60px] rounded border border-[#dbdcde] hover:border-[#676767]">
          <img
            alt="Martin HD-28 Standard Dreadnought Acoustic Guitar Natural"
            width={50}
            height={50}
            className="rounded"
            style={{ color: "transparent" }}
            src="https://media.guitarcenter.com/is/image/MMGS7/M17679000001000-04-86x86.jpg"
          />
        </div>

        <div className="relative leading-[42px] hover:shadow-[0_3px_6px_0_rgba(0,0,0,.12)] cursor-pointer flex items-center justify-center w-[60px] h-[60px] rounded border border-[#dbdcde] hover:border-[#676767]">
          <div className="absolute inset-0 leading-[22px] bg-[#fff] flex items-center justify-center text-[#2d2d2d] text-[16px] font-black rounded">
            +3
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
