const Price = () => {
  return (
    <div>
      <div className="mb-6 mt-4 ">
        <div className="flex items-start leading-[18px]">
          <span className="text-sm text-textNormalColor font-bold">
            Platinum{/* */}: {/* */}the finest guitars
          </span>
          &nbsp;
        </div>
        <div className="price-condition ">
          <div className="flex flex-wrap items-end mb-1 space-x-1 price-container">
            <span className="price-format shrink-0 md:shrink-1 md:w-auto sale-price font-bold text-2xl leading-[30px]">
              $3,499.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
