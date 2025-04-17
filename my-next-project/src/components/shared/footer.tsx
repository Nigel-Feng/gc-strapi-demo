import Button from "./button";

const NormalFooter = () => {
  return (
    <div className="m-auto h-auto footer-container print:hidden" role="contentinfo">
      <div className="jsx-25cb7c73b4ca3a6e px-4 pt-7 text-center md:px-0 pb-[10px] bg-[#e7e7e7] lg:pb-[30px]">
        <div className="jsx-25cb7c73b4ca3a6e mb-3.5 font-black text-lg leading-[22px]">
          Be the first to know about exclusive offers, tips and more.
        </div>
        <form id="emailForm" className="footer-sign-up flex justify-center flex-col md:flex-row">
          <div className="jsx-25cb7c73b4ca3a6e">
            <div className="ant-form-item mb-3 text-center md:text-left css-2bmhbg">
              <div className="ant-row ant-form-item-row css-2bmhbg">
                <input
                  placeholder="Enter Email Address (Required):"
                  title="Guitar Center Email News Signup"
                  id="emailForm_email"
                  aria-required="true"
                  style={{ width: 458, maxWidth: "100%", height: 36 }}
                  className="bg-white px-2 rounded font-normal md:mr-[14px]"
                  type="text"
                  aria-label="Email"
                />
              </div>
            </div>
            <div className="ant-form-item text-center md:text-left css-2bmhbg">
              <label className="flex items-center gap-1">
                <span className="ant-checkbox ant-wave-target css-2bmhbg">
                  <input id="emailForm_consentCap-33" className="ant-checkbox-input" type="checkbox" />
                </span>
                <span className="jsx-25cb7c73b4ca3a6e relative text-xs">
                  Yes, I would like to receive emails with news and offers from Guitar Center.
                </span>
              </label>
            </div>
          </div>
          <div className="ant-form-item css-2bmhbg">
            <Button text="Sign Up" className="!py-[10px]" />
          </div>
        </form>
        <p className="jsx-25cb7c73b4ca3a6e color-textNormalColor text-base text-center hidden">
          Thank you for signing up!
        </p>
      </div>
      <section className="footer-desktop block">
        <section className="jsx-cb9db1aea8bb585e">
          <div className="jsx-cb9db1aea8bb585e overflow-hidden pt-9 mx-auto max-w-screen-xl text-center footer-engage-wrap">
            <div className="jsx-cb9db1aea8bb585e text-center ways-to-shop w-[calc((100%*0.1118)+316px)]  mr-[calc((100%*0.1842)-160px)]  float-left px-[10px] mb-[30px]">
              <h6 className="text-base font-bold leading-normal mb-6" role="presentation">
                Other Ways to Shop
              </h6>
              <ul className="jsx-cb9db1aea8bb585e grid grid-cols-4 w-full ways-to-shop-list">
                <li className="jsx-cb9db1aea8bb585e financing">
                  <a
                    href="/pages/finance--Special-Financing-Offers"
                    target="_self"
                    className="jsx-cb9db1aea8bb585e text-[transparent]"
                  >
                    financing
                  </a>
                  <p className="jsx-cb9db1aea8bb585e">Financing</p>
                </li>
                <li className="jsx-cb9db1aea8bb585e apps">
                  <a
                    href="https://smart.link/5b5900bcdbd02"
                    target="_self"
                    className="jsx-cb9db1aea8bb585e text-[transparent]"
                  >
                    app
                  </a>
                  <p className="jsx-cb9db1aea8bb585e">App</p>
                </li>
                <li className="jsx-cb9db1aea8bb585e hidden catalog">
                  <a href="/" target="_self" className="jsx-cb9db1aea8bb585e text-[transparent]">
                    catalog
                  </a>
                  <p className="jsx-cb9db1aea8bb585e">Catalog</p>
                </li>
                <li className="jsx-cb9db1aea8bb585e gift-cards">
                  <a href="/Gift-Card" target="_self" className="jsx-cb9db1aea8bb585e text-[transparent]">
                    gift cards
                  </a>
                  <p className="jsx-cb9db1aea8bb585e">Gift Cards</p>
                </li>
                <li className="jsx-cb9db1aea8bb585e phone">
                  <a href="tel:866-498-7882" className="jsx-cb9db1aea8bb585e text-[transparent]" role="link">
                    phone number
                  </a>
                  <p className="jsx-cb9db1aea8bb585e">866-498-7882</p>
                </li>
              </ul>
            </div>
            <div className="jsx-cb9db1aea8bb585e text-center connect-with-us w-[calc((100%*0.046)+291.29px)] float-left px-[10px] mb-[30px]">
              <h6 className="text-base font-bold leading-normal mb-6" role="presentation">
                Connect With Us
              </h6>
              <ul className="jsx-cb9db1aea8bb585e grid grid-cols-4 w-full social-media-list">
                <li className="jsx-cb9db1aea8bb585e facebook">
                  <a
                    href="https://www.facebook.com/GuitarCenter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="jsx-cb9db1aea8bb585e text-[transparent]"
                    aria-describedby="audioeye_new_window_message"
                  >
                    facebook
                  </a>
                  <p className="jsx-cb9db1aea8bb585e">Facebook</p>
                </li>
                <li className="jsx-cb9db1aea8bb585e twitter">
                  <a
                    href="https://twitter.com/guitarcenter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="jsx-cb9db1aea8bb585e text-[transparent]"
                    aria-describedby="audioeye_new_window_message"
                  >
                    twitter
                  </a>
                  <p className="jsx-cb9db1aea8bb585e">Twitter</p>
                </li>
                <li className="jsx-cb9db1aea8bb585e youtube">
                  <a
                    href="https://www.youtube.com/guitarcenter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="jsx-cb9db1aea8bb585e text-[transparent]"
                    aria-describedby="audioeye_new_window_message"
                  >
                    YouTube
                  </a>
                  <p className="jsx-cb9db1aea8bb585e">YouTube</p>
                </li>
                <li className="jsx-cb9db1aea8bb585e instagram">
                  <a
                    href="https://instagram.com/guitarcenter#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="jsx-cb9db1aea8bb585e text-[transparent]"
                    aria-describedby="audioeye_new_window_message"
                  >
                    Instagram
                  </a>
                  <p className="jsx-cb9db1aea8bb585e">Instagram</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="jsx-d14d621e5cbeaefc">
          <div className="jsx-d14d621e5cbeaefc overflow-hidden max-w-screen-xl px-5 mx-auto text-sm md:px-0 footer-links-wrap">
            <div className="jsx-d14d621e5cbeaefc float-left md:pb-12 mr-28 footer-links-item px-[10px] w-[162px]">
              <h6 className="jsx-d14d621e5cbeaefc text-base font-bold leading-normal mb-6" role="presentation">
                Your Account
              </h6>
              <ul className="jsx-d14d621e5cbeaefc font-normal">
                <li className="jsx-d14d621e5cbeaefc">
                  <a href="/trackorder" className="jsx-d14d621e5cbeaefc">
                    Order History
                  </a>
                </li>
                <li className="jsx-d14d621e5cbeaefc">
                  <a href="/pages/return-policy" className="jsx-d14d621e5cbeaefc">
                    Returns
                  </a>
                </li>
                <li className="jsx-d14d621e5cbeaefc">
                  <a href="/wishlists/" className="jsx-d14d621e5cbeaefc">
                    Wish List
                  </a>
                </li>
                <li className="jsx-d14d621e5cbeaefc">
                  <a href="/myaccount/subscriptions" className="jsx-d14d621e5cbeaefc">
                    Email Preferences
                  </a>
                </li>
                <li className="jsx-d14d621e5cbeaefc">
                  <a href="/GC-Pro/" className="jsx-d14d621e5cbeaefc">
                    Business Accounts
                  </a>
                </li>
              </ul>
            </div>
            <div className="jsx-d14d621e5cbeaefc float-left md:pb-12 mr-28 footer-links-item px-[10px] w-[162px]">
              <h6 className="jsx-d14d621e5cbeaefc text-base font-bold leading-normal mb-6" role="presentation">
                Features
              </h6>
              <ul className="jsx-d14d621e5cbeaefc font-normal">
                <li className="jsx-d14d621e5cbeaefc">
                  <a href="/Rebates.gc" className="jsx-d14d621e5cbeaefc">
                    Rebates
                  </a>
                </li>
                <li className="jsx-d14d621e5cbeaefc">
                  <a href="/lease-to-own" className="jsx-d14d621e5cbeaefc">
                    Apply for Leasing
                  </a>
                </li>
                <li className="jsx-d14d621e5cbeaefc">
                  <a href="/pages/Pro-Coverage.gc" className="jsx-d14d621e5cbeaefc">
                    Pro Coverage
                  </a>
                </li>
                <li className="jsx-d14d621e5cbeaefc">
                  <a href="/pages/press-room" className="jsx-d14d621e5cbeaefc">
                    Press Room
                  </a>
                </li>
              </ul>
            </div>
            <div className="jsx-d14d621e5cbeaefc float-left md:pb-12 mr-28 footer-links-item px-[10px] w-[162px]">
              <h6 className="jsx-d14d621e5cbeaefc text-base font-bold leading-normal mb-6" role="presentation">
                Support
              </h6>
              <ul className="jsx-d14d621e5cbeaefc font-normal">
                <li className="jsx-d14d621e5cbeaefc">
                  <a href="/customer-service" className="jsx-d14d621e5cbeaefc">
                    Service &amp; Support
                  </a>
                </li>
                <li className="jsx-d14d621e5cbeaefc">
                  <a href="/pages/company-information" className="jsx-d14d621e5cbeaefc">
                    About
                  </a>
                </li>
                <li className="jsx-d14d621e5cbeaefc">
                  <a href="/pages/careers" className="jsx-d14d621e5cbeaefc">
                    Careers
                  </a>
                </li>
                <li className="jsx-d14d621e5cbeaefc">
                  <a href="/sitemap/" className="jsx-d14d621e5cbeaefc">
                    Site Map
                  </a>
                </li>
                <li className="jsx-d14d621e5cbeaefc">
                  <a href="https://stores.guitarcenter.com/search.html" className="jsx-d14d621e5cbeaefc">
                    Locations
                  </a>
                </li>
                <li className="jsx-d14d621e5cbeaefc">
                  <a href="/pages/Accessibility-Statement.gc" className="jsx-d14d621e5cbeaefc">
                    Accessibility Statement
                  </a>
                </li>
                <li className="jsx-d14d621e5cbeaefc">
                  <a href="/restructuring" className="jsx-d14d621e5cbeaefc">
                    Restructuring
                  </a>
                </li>
              </ul>
            </div>
            <div className="jsx-d14d621e5cbeaefc float-right pb-12 mr-28 w-auto how-we-doing px-[10px] md:min-w-[256px]">
              <h6 className="jsx-d14d621e5cbeaefc text-base font-bold leading-normal mb-6" role="presentation">
                How Are We Doing?
              </h6>
              <a
                href="/customer-service/email-us?deptId=customer_service"
                className="text-center block px-4 py-1 rounded text-base border  mb-5 border-[#333]"
              >
                Provide Feedback
              </a>
              <div className="jsx-d14d621e5cbeaefc footer-bbb-links-wrap">
                <div className="bbb-links flex justify-between items-center">
                  <a className="magicLink targetBlank bbb-link" href="https://www.bbb.org/" target="_blank">
                    <span className="bbb-img">Better Business Bureau</span>
                  </a>
                  <a
                    className="bbb-caru-link"
                    target="_blank"
                    rel="nofollow"
                    href="https://bbbprograms.org/programs/all-programs/children's-advertising-review-unit"
                    aria-describedby="audioeye_new_window_message"
                  >
                    <img
                      width="108px"
                      height="32px"
                      alt="BBB CARU business review"
                      src="https://static.guitarcenter.com/static/gc/bbb-footer/bbb-caru.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="jsx-78cd35d44d57255b">
          <div className="jsx-78cd35d44d57255b footer-legal-wrap w-full h-[60px] bg-[#000]">
            <div className="jsx-78cd35d44d57255b flex flex-wrap justify-center items-center mx-auto h-full font-bold text-white">
              <div className="legal-footer-wrap text-xs">
                <span className="footer-copyright left">Copyright © Guitar Center, Inc.</span>
                <span className="all-rights-reserved left">All Rights Reserved.</span>
                <a href="/pages/ca-transparency-supply-chain" className="ml-6 right cal-transparency">
                  California Transparency Act
                </a>
                <a href="/pages/purchase-terms" className="ml-6 right">
                  Purchase Terms &amp; Conditions
                </a>
                <a href="/pages/privacy-rights-policy" className="ml-6 right">
                  Your Privacy Rights
                </a>
                <a className="ml-6 right" href="/pages/terms-of-use">
                  Terms of Use
                </a>
                <a className="ml-6 right" href="/pages/data-request?clarip=1">
                  Do Not Sell or Share My Info
                </a>
                <a className="ml-6 right" href="/pages/data-request">
                  Data Rights Request
                </a>
                <a className="ml-6 right" id="consent-management-tool" href="#" role="button">
                  Cookie Preferences
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="footer-mobile hidden">
        <div className="jsx-b5feb880c54224e2 mobile-footer element-hidden px-[10px] text-[#fff] text-center bg-[#424242]">
          <div className="jsx-b5feb880c54224e2 contact-phone-list">
            <div className="jsx-b5feb880c54224e2 contact-phone-wrapper float-left w-[48%] p-[1px] mx-0 my-[10px] bg-textNormalColor">
              <div className="jsx-b5feb880c54224e2 contact-phone">
                {" "}
                <a href="tel:866-498-7882" className="jsx-b5feb880c54224e2 block ui-link" role="link">
                  866-498-7882
                </a>{" "}
                <span className="jsx-b5feb880c54224e2">English</span>{" "}
              </div>
            </div>
            <div className="jsx-b5feb880c54224e2 contact-phone-wrapper float-right w-[48%] p-[1px] mx-0 my-[10px] bg-textNormalColor spanish">
              <div className="jsx-b5feb880c54224e2 contact-phone">
                {" "}
                <a href="tel:" className="jsx-b5feb880c54224e2 block ui-link">
                  877-687-5402
                </a>{" "}
                <span className="jsx-b5feb880c54224e2">Español</span>
              </div>
            </div>
            <div
              id="btnChatNowFooter"
              className="jsx-b5feb880c54224e2 hidden float-left mx-0 w-full contact-phone-wrapper p-[1px] my-[10px] bg-textNormalColor"
            >
              <div className="jsx-b5feb880c54224e2 contact-phone">
                {" "}
                <a
                  href="/common/chatPopup.jsp?entryPointId=1001&brandId=GCChat&sourceId=GCChat&liveChat=true"
                  target="blank"
                  className="jsx-b5feb880c54224e2 block ui-link h-[43px]"
                  aria-describedby="audioeye_new_window_message"
                >
                  Chat Now
                </a>{" "}
              </div>
            </div>
          </div>
          <ul className="jsx-b5feb880c54224e2 site-links  mb-0 float-left border border-[#4d4d4d] border-x-0">
            <li className="jsx-b5feb880c54224e2 gift-card">
              {" "}
              <a href="/Gift-Card" className="jsx-b5feb880c54224e2 float-left ui-link">
                Gift Card
              </a>{" "}
            </li>
            <li className="jsx-b5feb880c54224e2 customer-service">
              {" "}
              <a href="/customer-service/" className="jsx-b5feb880c54224e2 ui-link">
                Customer Service
              </a>{" "}
            </li>
            <li className="jsx-b5feb880c54224e2 financing">
              {" "}
              <a href="/Special-Financing-Offers.gc" className="jsx-b5feb880c54224e2 ui-link">
                Financing
              </a>{" "}
            </li>
            <li className="jsx-b5feb880c54224e2 mobile-app">
              {" "}
              <a href="/pages/mobile-app" className="jsx-b5feb880c54224e2 float-right ui-link">
                Mobile App
              </a>{" "}
            </li>
          </ul>
          <div className="jsx-b5feb880c54224e2 px-2 mobile-footer-section">
            <div className="jsx-b5feb880c54224e2 float-left w-full leading-8 connect mb-[18px]">
              <ul className="jsx-b5feb880c54224e2 social-icons mb-0 float-left w-[56%] max-w-[300px]">
                <li className="jsx-b5feb880c54224e2 facebook">
                  {" "}
                  <a
                    href="https://www.facebook.com/GuitarCenter"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-describedby="audioeye_new_window_message"
                    className="jsx-b5feb880c54224e2 ui-link"
                  >
                    Facebook
                  </a>{" "}
                </li>
                <li className="jsx-b5feb880c54224e2 twitter">
                  {" "}
                  <a
                    href="https://twitter.com/guitarcenter"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-describedby="audioeye_new_window_message"
                    className="jsx-b5feb880c54224e2 ui-link"
                  >
                    Twitter
                  </a>
                </li>
                <li className="jsx-b5feb880c54224e2 youtube">
                  {" "}
                  <a
                    href="https://www.youtube.com/guitarcenter"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-describedby="audioeye_new_window_message"
                    className="jsx-b5feb880c54224e2 ui-link"
                  >
                    YouTube
                  </a>{" "}
                </li>
                <li className="jsx-b5feb880c54224e2 instagram">
                  {" "}
                  <a
                    href="https://www.instagram.com/guitarcenter"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-describedby="audioeye_new_window_message"
                    className="jsx-b5feb880c54224e2 ui-link"
                  >
                    Instagram
                  </a>{" "}
                </li>
              </ul>
              <div className="jsx-b5feb880c54224e2 feedback float-right w-[44%] text-right pt-[1px]">
                <a
                  href="/customer-service/email-us?deptId=Feedback"
                  id="feedback"
                  rel="external"
                  className="jsx-b5feb880c54224e2 feedback-link ui-link"
                >
                  Give Feedback
                </a>
              </div>
            </div>
            <div className="jsx-b5feb880c54224e2 mobileConnectLinks">
              <ul className="legal">
                <li>
                  {" "}
                  <a data-ajax="false" href="/pages/terms-of-use" className="ui-link">
                    Terms of Use
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a data-ajax="false" href="/pages/purchase-terms" className="ui-link">
                    Terms &amp; Conditions
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a data-ajax="false" href="/pages/privacy-rights-policy" className="ui-link">
                    Privacy Policy
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a data-ajax="false" href="/pages/Accessibility-Statement.gc" className="ui-link">
                    Accessibility Statement
                  </a>
                </li>
              </ul>
              <ul className="legal">
                <li>
                  <a data-ajax="false" href="/pages/ca-transparency-supply-chain" className="ui-link">
                    CA Transparency Act
                  </a>
                </li>
                <li>
                  <a data-ajax="false" href="/pages/data-request?clarip=1" className="ui-link do-not-sell-link">
                    Do Not Sell or Share My Info
                  </a>
                </li>
                <li>
                  <a data-ajax="false" href="/pages/data-request" className="ui-link data-rights-request-link">
                    Data Rights Request
                  </a>
                </li>
                <li>
                  <a
                    data-ajax="false"
                    href="#"
                    id="consent-management-tool"
                    className="ui-link cookie-preferences-link"
                  >
                    Cookie Preferences
                  </a>
                </li>
              </ul>
            </div>
            <div className="jsx-b5feb880c54224e2 bbb-link-mobile mb-[10px]">
              <div className="jsx-b5feb880c54224e2 footer-bbb-links-wrap">
                <div className="bbb-links">
                  <a className="magicLink targetBlank bbb-link" href="https://www.bbb.org/" target="_blank">
                    <span className="bbb-img">
                      Better Business Bureau <span className="screen-reader-only">(opens in new window)</span>
                    </span>
                  </a>
                  <a
                    className="bbb-caru-link"
                    target="_blank"
                    rel="nofollow"
                    href="https://bbbprograms.org/programs/all-programs/children's-advertising-review-unit"
                    aria-label="BB CARU Business Review"
                    aria-describedby="audioeye_new_window_message"
                  >
                    <img
                      width="140px"
                      height="42px"
                      src="//static.guitarcenter.com/static/gc/bbb-footer/bbb-caru.png"
                      role="presentation"
                      aria-hidden="true"
                      tabIndex={-1}
                    />
                  </a>
                </div>
              </div>
            </div>
            <p className="jsx-b5feb880c54224e2 copyright mb-[10px] text-[10px] leading-[1.3] pb-[10px]">
              Copyright © Guitar Center Inc.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const CheckoutFooter = () => {
  return (
    <footer className="bg-[#333] flex-none font-normal leading-6 text-xs text-white">
      <div className="max-w-[1540px] flex flex-col lg:flex-row lg:justify-between p-4 md:px-6 lg:items-center mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center mr-6">
          <div className="mt-2 lg:mt-0">
            <div className="checkout-footer-left">
              <span className="footer-copyright">©2025 Guitar Center, Inc.</span>
              <span className="all-rights-reserved">All Rights Reserved.</span>
            </div>
          </div>
        </div>
        <div className="mt-[10px] lg:mt-0">
          <div className="checkout-footer-right flex flex-wrap flex-col lg:flex-row py-3.5 space-y-2 lg:space-y-0">
            <a className="mr-4 hover:underline" href="/pages/ca-transparency-supply-chain">
              CA Transparency Act
            </a>
            <a className="mr-4 hover:underline" href="/pages/purchase-terms">
              Purchase Terms
            </a>
            <a className="mr-4 hover:underline" href="/pages/privacy-rights-policy">
              Your Privacy Rights
            </a>
            <a className="mr-4 hover:underline" href="/pages/terms-of-use">
              Terms of Use
            </a>
            <a className="mr-4 hover:underline" href="/pages/data-request?clarip=1">
              Do Not Sell or Share My Info
            </a>
            <a className="mr-4 hover:underline" href="/pages/data-request">
              Data Rights Request
            </a>
            <a className="hover:underline" id="consent-management-tool" href="#">
              Cookie Preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer: React.FC<any> = ({ content }) => {
  return content.footer.type === "Normal Footer" ? <NormalFooter /> : <CheckoutFooter />;
};

export default Footer;
