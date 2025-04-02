const DeliveryAndStore = () => {
  return (
    <div className="store-delivery px-[12px] pt-4 pb-[21px] bg-[#f8f8f8] font-semibold">
      <div className="mb-4 show-message font-semibold" />
      <div className="flex items-start mb-4 text-sm store">
        <span className="flex justify-center items-center w-8 h-8">
          <img width={24} height={22} src="https://www.guitarcenter.com/assets/icons/header/vector-icon.svg" />
        </span>
        <div className="ml-2 leading-6 store-content">
          <p className="text-[#E4111A] cursor-pointer font-semibold">
            <span className="leading-[32px]">Check store availability</span>
          </p>
        </div>
      </div>
      <div className="jsx-630e939f32a02e8e flex text-sm delivery font-semibold">
        <span className="jsx-630e939f32a02e8e flex justify-center items-center w-8 h-8">
          <img
            alt="delivery-icon"
            loading="lazy"
            width={26}
            height={16}
            decoding="async"
            data-nimg={1}
            className="h-[16px] object-contain"
            src="https://www.guitarcenter.com/assets/icons/header/truck-icon.svg"
          />
        </span>
        <div className="jsx-630e939f32a02e8e ml-2 leading-6 delivery-content">
          <p className="jsx-630e939f32a02e8e leading-7">
            <span className="jsx-630e939f32a02e8e text-sm font-bold">Free Delivery</span> to{" "}
            <button
              className="jsx-630e939f32a02e8e underline cursor-pointer text-[#000000] font-bold"
              role="button"
              tabIndex={0}
            >
              United States
            </button>
          </p>
          <div className="jsx-630e939f32a02e8e" />
          <p className="jsx-630e939f32a02e8e pr-4">
            <span className="jsx-630e939f32a02e8e text-textNormalColor font-semibold">
              <span className="jsx-630e939f32a02e8e font-semibold text-greenDark">In-stock</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAndStore;
