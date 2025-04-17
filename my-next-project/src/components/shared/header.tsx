const NormalHeader = () => {
  return (
    <div className="header-layout print:hidden">
      <div className="pre-header-roll-wrapper" id="preHeaderRollWrapper">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n  #preHeaderRollWrapper.pre-header-roll-wrapper {\n    height: auto !important;\n    background-color: #e7e7e7;\n  }\n\n  a.gc-top-headroll-container-link {\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n  .gc-top-headroll-container {\n    position: relative;\n    box-sizing: border-box;\n    min-height: 40px;\n    background-color: #e7e7e7;\n    width: 100%;\n    display: inline-block;\n  }\n\n  .gc-top-headroll-container .inner-container {\n    width: 100%;\n    max-width: 1500px;\n    margin: 0 auto;\n    min-height: 33px;\n    position: relative;\n    background: #e7e7e7;\n    text-align: center;\n  }\n\n  .gc-top-headroll-container .inner-container .promo-text {\n    color: #a71115;\n    font-family: montserratregular, montserrat, arial, Helvetica, sans-serif;\n    margin: 10px 0;\n    font-size: 0.9rem;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-decoration: none;\n    font-weight: bold;\n  }\n\n  .gc-top-headroll-container .inner-container .pre-header-promo-bar-cta {\n    color: #a71115;\n    padding-left: 15px;\n  }\n\n  .gc-top-headroll-container .inner-container .pre-header-promo-bar-cta:hover {\n    color: #a71115;\n  }\n\n  .gc-top-headroll-container .inner-container a {\n    color: #a71115;\n    text-decoration: underline;\n  }\n\n  .mobile-only-header-break {\n    display: none;\n  }\n\n  .gc-top-headroll-container .inner-container .mobile-only-break {\n    display: none;\n  }\n\n  @media (max-width: 388px) {\n    .gc-top-headroll-container .inner-container .promo-text {\n      line-height: 19px;\n      margin: 10px 5px 0px 5px;\n    }\n\n    .gc-top-headroll-container .inner-container {\n      margin: 0 auto 13px auto;\n      min-height: 31px;\n    }\n\n    .gc-top-headroll-container .inner-container .mobile-only-break {\n      display: block;\n    }\n\n    .gc-top-headroll-container {\n      position: relative;\n      box-sizing: border-box;\n    }\n\n    .gc-top-headroll-container .inner-container .pre-header-promo-bar-cta {\n      padding-left: 0px;\n    }\n\n    .mobile-only-header-break {\n      display: block;\n    }\n\n    .desktop-only-header-break {\n      display: none;\n    }\n  }\n\n  @media (max-width: 321px) {\n    .gc-top-headroll-container .inner-container .promo-text {\n      font-size: 0.8rem;\n    }\n  }\n",
          }}
        />
        <div className="gc-top-headroll-container">
          <div className="inner-container">
            <div className="promo-text">
              Call{" "}
              <span className="js-phone-number-headerroll">
                <a href="tel:866-498-7882" className="cta-link">
                  866-498-7882
                </a>
              </span>{" "}
              or{" "}
              <a href="#" id="hrChat">
                chat
              </a>{" "}
              to save on orders of&nbsp;$199+
            </div>
            {/* <br class="mobile-only-break" /> */}
          </div>
        </div>
      </div>
      <div className="flex h-[58px] lg:h-[88px] max-w-[1500px] lg:w-[calc(100%-40px)] mx-auto relative">
        <div className="flex flex-row grow lg:!flex-none">
          <div className="w-[92px] lg:w-[139px] h-[58px] lg:h-[88px] bg-[#e7131a]">
            <a href="/">
              <img
                alt="Guitar Center logo"
                width={139}
                height={88}
                decoding="async"
                data-nimg={1}
                style={{ color: "transparent", width: "100%", height: "auto" }}
                src="https://www.guitarcenter.com/assets/icons/header/gc-logo-white.svg"
              />
            </a>
          </div>
        </div>
        <div className="shop-menu w-[64px] lg:w-[90px] flex justify-center items-center" aria-label="shop menu button">
          <button className="cursor-pointer" aria-label="SHOP">
            <div className="w-8 lg:w-10 h-[3px] bg-[#e7131a] lg:!bg-textNormalColor mb-[6px] lg:mb-[5px]" />
            <div className="w-8 lg:w-10 h-[3px] bg-[#e7131a] lg:!bg-textNormalColor mb-[6px] lg:mb-[5px]" />
            <div className="w-8 lg:w-10 h-[3px] bg-[#e7131a] lg:!bg-textNormalColor mb-[0] lg:mb-[2px]" />
            <span className="font-bold text-sm element-hidden lg:inline">SHOP</span>
          </button>
        </div>
        <div className="header-search-wrapper lg:ml-[22px] h-full items-center lg:flex-1 flex">
          <div className="mask" />
          <div className="h-[48px] w-full absolute lg:relative left-0 bottom-[-48px] lg:bottom-0 element-hidden lg:block">
            <label htmlFor="header-search-input" className="hidden">
              search
            </label>
            <input
              type="text"
              maxLength={512}
              id="header-search-input"
              className="border bg-white outline-[0px] h-full w-full text-[15px] rounded-[5px] pl-2 lg:pl-6 placeholder:text-textNormalColor pr-[56px]"
              placeholder="Find your sound"
              autoComplete="off"
            />
            <button className="absolute right-0 top-0 w-[56px] h-full flex items-center justify-center cursor-pointer">
              <span className="hidden">search</span>
              <svg
                id="Group_14"
                data-name="Group 14"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={26}
                viewBox="0 0 24 26"
              >
                <g
                  id="Ellipse_2"
                  data-name="Ellipse 2"
                  transform="translate(0)"
                  fill="#fff"
                  stroke="#333"
                  strokeWidth={3}
                >
                  <circle cx={9} cy={9} r={9} stroke="none" />
                  <circle cx={9} cy={9} r="7.5" fill="none" />
                </g>
                <line
                  id="Line_10"
                  data-name="Line 10"
                  x2="9.42"
                  y2="9.42"
                  transform="translate(13.278 15.579)"
                  fill="none"
                  stroke="#333"
                  strokeWidth={3}
                />
              </svg>
            </button>
          </div>
          <button
            className="w-[64px] h-full items-center justify-center flex lg:hidden cursor-pointer"
            aria-label="search button"
          >
            <span className="hidden">search</span>
            <svg
              id="Group_14"
              data-name="Group 14"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={26}
              viewBox="0 0 24 26"
            >
              <g
                id="Ellipse_2"
                data-name="Ellipse 2"
                transform="translate(0)"
                fill="#fff"
                stroke="#e7131a"
                strokeWidth={3}
              >
                <circle cx={9} cy={9} r={9} stroke="none" />
                <circle cx={9} cy={9} r="7.5" fill="none" />
              </g>
              <line
                id="Line_10"
                data-name="Line 10"
                x2="9.42"
                y2="9.42"
                transform="translate(13.278 15.579)"
                fill="none"
                stroke="#e7131a"
                strokeWidth={3}
              />
            </svg>
          </button>
        </div>
        <button className="pl-[18px] pr-1 items-center cursor-pointer element-hidden lg:flex">
          <div className="w-[50px] h-[50px] mr-[5px]">
            <img
              alt="liveHelpIcon"
              width={50}
              height={50}
              decoding="async"
              data-nimg={1}
              className="rounded-[50px]"
              style={{ color: "transparent", width: "100%", height: "auto" }}
              src="https://www.guitarcenter.com/assets/icons/header/liveHelpIcon.webp"
            />
          </div>
          <div className="mr-[10px]">
            <div className="live-help-text mb-1 text-left text-textNormalColor  font-bold">Live Help</div>
            <div className="live-help-phone font-normal">866-498-7882</div>
          </div>
          <span className="help-arrow mr-[10px]">&gt;</span>
        </button>
        <button className="jsx-f52351b83a87079a ShopLogin flex flex-col justify-center w-[85px] h-full text-sm text-center cursor-pointer md:relative">
          <span className="jsx-f52351b83a87079a ShopLoginIcon inline-block w-7 h-7 mx-auto md:absolute md:top-[18.4px] md:left-0 right-0">
            <img
              alt="shop login icon"
              width={28}
              height={28}
              decoding="async"
              data-nimg={1}
              className="mx-auto"
              style={{ color: "transparent" }}
              src="https://www.guitarcenter.com/assets/icons/header/account-red.svg"
            />
          </span>
          <span
            title="Sign In"
            className="jsx-f52351b83a87079a ShopLoginText pt-[3px] md:mt-[29.5px] font-normal mx-auto w-full max-h-[40px] whitespace-nowrap overflow-hidden text-ellipsis"
          >
            Sign In
          </span>
        </button>
        <button className="MiniCart flex flex-col justify-center w-[64px] lg:w-[68px] h-full items-center text-sm text-center cursor-pointer">
          <div className="miniCartIcon relative w-8 h-8 mx-auto">
            <img
              alt="mini cart icon"
              width={32}
              height={32}
              decoding="async"
              data-nimg={1}
              className="mx-auto"
              style={{ color: "transparent" }}
              src="https://www.guitarcenter.com/assets/icons/header/shopping-cart.svg"
            />
          </div>
          <span className="pt-[2px] font-normal element-hidden lg:block">Cart</span>
        </button>
      </div>
      <div className="h-[50px] justify-between bg-[#f4f4f4]">
        <div className="flex max-w-[1500px] h-full items-center justify-between mx-auto px-5 lg:pl-11">
          <div className="jsx-57c561a9e75d78bb flex justify-between w-full md:w-auto">
            <span className="jsx-57c561a9e75d78bb flex items-center mr-4 ">
              <img
                alt="my-store-black"
                loading="lazy"
                width={40}
                height={40}
                decoding="async"
                data-nimg={1}
                src="https://www.guitarcenter.com/assets/icons/header/my-store-black.svg"
                style={{ color: "transparent" }}
              />
              <span className="jsx-57c561a9e75d78bb">
                My Store{" "}
                <button className="jsx-57c561a9e75d78bb header-store-name ml-[5px] underline text-sm cursor-pointer font-bold">
                  Select store
                </button>
              </span>
            </span>
            <span className="jsx-57c561a9e75d78bb header-delivery flex items-center">
              <img
                alt="delivery truck"
                loading="lazy"
                width={40}
                height={40}
                decoding="async"
                data-nimg={1}
                src="https://www.guitarcenter.com/assets/icons/header/delivery-truck-black.svg"
                style={{ color: "transparent" }}
              />
              <span className="jsx-57c561a9e75d78bb">
                Delivery to{" "}
                <button className="jsx-57c561a9e75d78bb zipCode ml-[5px] underline text-sm cursor-pointer font-bold hover:text-[#e7131a]">
                  90046
                </button>
              </span>
            </span>
          </div>
          <div className="jsx-e8fd8cdd0d8e2cc9 rightNav element-hidden h-full font-normal lg:flex ml-auto">
            <div className="jsx-e8fd8cdd0d8e2cc9 cursor-pointer pl-[5px] mr-[10px] outer-collapsible-trylessons">
              <a
                href="/Services/Lessons"
                title="Try Lessons"
                className="jsx-e8fd8cdd0d8e2cc9 flex h-full items-center text-[#e7131a] "
              >
                Try Lessons
              </a>
            </div>
            <div className="jsx-e8fd8cdd0d8e2cc9 cursor-pointer pl-[5px] mr-[10px] outer-collapsible-used&vintage">
              <button className="jsx-e8fd8cdd0d8e2cc9 flex h-full items-center relative departments-menu">
                <span className="jsx-e8fd8cdd0d8e2cc9 mr-[5px]">Used &amp; Vintage</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12.934"
                  height="8.961"
                  viewBox="0 0 12.934 8.961"
                  className="jsx-e8fd8cdd0d8e2cc9 inline-block"
                >
                  <path
                    id="icon_Arrow_RIght_sm"
                    data-name="icon Arrow RIght sm"
                    d="M0,10.116,6,5.058,0,0"
                    transform="translate(11.525 1.409) rotate(90)"
                    fill="none"
                    stroke="#333"
                    strokeLinecap="round"
                    strokeWidth={2}
                    opacity="0.997"
                    className="jsx-e8fd8cdd0d8e2cc9"
                  />
                </svg>
              </button>
            </div>
            <div className="jsx-e8fd8cdd0d8e2cc9 cursor-pointer pl-[5px] mr-[10px] outer-collapsible-deals">
              <button className="jsx-e8fd8cdd0d8e2cc9 flex h-full items-center relative departments-menu">
                <span className="jsx-e8fd8cdd0d8e2cc9 mr-[5px]">Deals</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12.934"
                  height="8.961"
                  viewBox="0 0 12.934 8.961"
                  className="jsx-e8fd8cdd0d8e2cc9 inline-block"
                >
                  <path
                    id="icon_Arrow_RIght_sm"
                    data-name="icon Arrow RIght sm"
                    d="M0,10.116,6,5.058,0,0"
                    transform="translate(11.525 1.409) rotate(90)"
                    fill="none"
                    stroke="#333"
                    strokeLinecap="round"
                    strokeWidth={2}
                    opacity="0.997"
                    className="jsx-e8fd8cdd0d8e2cc9"
                  />
                </svg>
              </button>
            </div>
            <div className="jsx-e8fd8cdd0d8e2cc9 cursor-pointer pl-[5px] mr-[10px] outer-collapsible-financing">
              <a
                href="/Special-Financing-Offers.gc"
                title="Financing"
                className="jsx-e8fd8cdd0d8e2cc9 flex h-full items-center false "
              >
                Financing
              </a>
            </div>
            <div className="jsx-e8fd8cdd0d8e2cc9 cursor-pointer pl-[5px] mr-[10px] outer-collapsible-riffsblog">
              <a href="/riffs" title="Riffs Blog" className="jsx-e8fd8cdd0d8e2cc9 flex h-full items-center false ">
                Riffs Blog
              </a>
            </div>
            <div className="jsx-e8fd8cdd0d8e2cc9 cursor-pointer pl-[5px] mr-[10px] outer-collapsible-more">
              <button className="jsx-e8fd8cdd0d8e2cc9 flex h-full items-center relative more-menu">
                <span className="jsx-e8fd8cdd0d8e2cc9 mr-[5px]">More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12.934"
                  height="8.961"
                  viewBox="0 0 12.934 8.961"
                  className="jsx-e8fd8cdd0d8e2cc9 inline-block"
                >
                  <path
                    id="icon_Arrow_RIght_sm"
                    data-name="icon Arrow RIght sm"
                    d="M0,10.116,6,5.058,0,0"
                    transform="translate(11.525 1.409) rotate(90)"
                    fill="none"
                    stroke="#333"
                    strokeLinecap="round"
                    strokeWidth={2}
                    opacity="0.997"
                    className="jsx-e8fd8cdd0d8e2cc9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckoutHeader = () => {
  return (
    <header className="bg-white flex-none" s-object-region="checkout-header">
      <div className="max-w-[1540px] px-4 md:px-6 h-[72px] md:h-[100px] flex items-center justify-between mx-auto">
        <a href="/" className="w-[68px] md:w-[102px] inline-block" id="mainLogo">
          <img
            alt="site logo"
            width={102}
            height={54}
            style={{ color: "transparent", width: "100%", height: "auto" }}
            src="https://www.guitarcenter.com/assets/images/common/main-logo.svg"
          />
        </a>
        <a className="inline-block w-[30px] md:w-9" id="miniCart" href="/cart">
          <img
            alt="cart icon"
            loading="lazy"
            width={36}
            height={36}
            decoding="async"
            data-nimg={1}
            style={{ color: "transparent", width: "100%", height: "auto" }}
            src="https://www.guitarcenter.com/assets/images/common/cart.svg"
          />
        </a>
      </div>
    </header>
  );
};

const Header: React.FC<any> = ({ content }) => {
  return content.header.type === "Normal Header" ? <NormalHeader /> : <CheckoutHeader />;
};

export default Header;
