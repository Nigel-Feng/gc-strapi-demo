import type { Schema, Struct } from "@strapi/strapi";

export interface HomeDailyPick extends Struct.ComponentSchema {
  collectionName: "components_home_daily_picks";
  info: {
    displayName: "DailyPick";
  };
  attributes: {
    featuredDealsLink: Schema.Attribute.String;
    marketingImageSrc: Schema.Attribute.String;
    marketingMobileImageSrc: Schema.Attribute.String;
    marketingTabletImageSrc: Schema.Attribute.String;
    queryUrl: Schema.Attribute.String;
  };
}

export interface HomeHeroBanner extends Struct.ComponentSchema {
  collectionName: "components_home_hero_banners";
  info: {
    description: "";
    displayName: "HeroBanner";
  };
  attributes: {
    bgImage: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    button: Schema.Attribute.Component<"shared.button", true>;
    dateLine: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    link: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
    tagLine: Schema.Attribute.Text;
  };
}

export interface HomeScrollTiles extends Struct.ComponentSchema {
  collectionName: "components_home_scroll_tiles";
  info: {
    displayName: "ScrollTiles";
  };
  attributes: {
    tiles: Schema.Attribute.Component<"shared.scroll-tile", true>;
  };
}

export interface PdpArticle extends Struct.ComponentSchema {
  collectionName: "components_pdp_articles";
  info: {
    description: "";
    displayName: "Article";
  };
  attributes: {
    name: Schema.Attribute.Enumeration<["Article"]> & Schema.Attribute.DefaultTo<"Article">;
  };
}

export interface PdpCtaButton extends Struct.ComponentSchema {
  collectionName: "components_pdp_cta_buttons";
  info: {
    displayName: "CTAButton";
  };
  attributes: {
    name: Schema.Attribute.Enumeration<["ProductCTAButton"]> & Schema.Attribute.DefaultTo<"ProductCTAButton">;
  };
}

export interface PdpDeliveryAndStore extends Struct.ComponentSchema {
  collectionName: "components_pdp_delivery_and_stores";
  info: {
    displayName: "DeliveryAndStore";
  };
  attributes: {
    name: Schema.Attribute.Enumeration<["DeliveryAndStore "]> & Schema.Attribute.DefaultTo<"DeliveryAndStore ">;
  };
}

export interface PdpDescription extends Struct.ComponentSchema {
  collectionName: "components_pdp_descriptions";
  info: {
    displayName: "Description";
  };
  attributes: {
    name: Schema.Attribute.Enumeration<["ProductDescription"]> & Schema.Attribute.DefaultTo<"ProductDescription">;
  };
}

export interface PdpGallery extends Struct.ComponentSchema {
  collectionName: "components_pdp_galleries";
  info: {
    description: "";
    displayName: "Gallery";
  };
  attributes: {
    name: Schema.Attribute.Enumeration<["Gallery"]> & Schema.Attribute.DefaultTo<"Gallery">;
  };
}

export interface PdpPrice extends Struct.ComponentSchema {
  collectionName: "components_pdp_prices";
  info: {
    description: "";
    displayName: "Price";
  };
  attributes: {
    name: Schema.Attribute.Enumeration<["Price"]> & Schema.Attribute.DefaultTo<"Price">;
  };
}

export interface PdpProductDetail extends Struct.ComponentSchema {
  collectionName: "components_pdp_product_details";
  info: {
    description: "";
    displayName: "ProductDetail";
  };
  attributes: {
    name: Schema.Attribute.Enumeration<["ProductDetail"]> & Schema.Attribute.DefaultTo<"ProductDetail">;
  };
}

export interface PdpProductMainContent extends Struct.ComponentSchema {
  collectionName: "components_pdp_product_main_contents";
  info: {
    description: "";
    displayName: "ProductMainContent";
  };
  attributes: {
    name: Schema.Attribute.Enumeration<["ProductMainContent"]> & Schema.Attribute.DefaultTo<"ProductMainContent">;
  };
}

export interface PdpProductPrimaryRow extends Struct.ComponentSchema {
  collectionName: "components_pdp_product_primary_rows";
  info: {
    description: "";
    displayName: "ProductPrimaryRow";
  };
  attributes: {
    name: Schema.Attribute.Enumeration<["ProductPrimaryRow"]> & Schema.Attribute.DefaultTo<"ProductPrimaryRow">;
  };
}

export interface PdpTitle extends Struct.ComponentSchema {
  collectionName: "components_pdp_titles";
  info: {
    description: "";
    displayName: "Title";
  };
  attributes: {
    name: Schema.Attribute.Enumeration<["ProductTitle"]> & Schema.Attribute.DefaultTo<"ProductTitle">;
  };
}

export interface PdpVideo extends Struct.ComponentSchema {
  collectionName: "components_pdp_videos";
  info: {
    description: "";
    displayName: "Video";
  };
  attributes: {
    name: Schema.Attribute.Enumeration<["ProductVideo"]> & Schema.Attribute.DefaultTo<"ProductVideo">;
  };
}

export interface PlpMainContent extends Struct.ComponentSchema {
  collectionName: "components_plp_main_contents";
  info: {
    displayName: "MainContent";
  };
  attributes: {
    algoliaQuery: Schema.Attribute.JSON;
  };
}

export interface PlpShopByBrand extends Struct.ComponentSchema {
  collectionName: "components_plp_shop_by_brands";
  info: {
    description: "";
    displayName: "ShopByBrand";
  };
  attributes: {
    brands: Schema.Attribute.Component<"shared.brand", true>;
    title: Schema.Attribute.String;
  };
}

export interface PlpShopByCategory extends Struct.ComponentSchema {
  collectionName: "components_plp_shop_by_categories";
  info: {
    description: "";
    displayName: "ShopByCategory";
  };
  attributes: {
    categories: Schema.Attribute.Component<"shared.category", true>;
  };
}

export interface SharedBrand extends Struct.ComponentSchema {
  collectionName: "components_shared_brands";
  info: {
    displayName: "Brand";
  };
  attributes: {
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    name: Schema.Attribute.String;
    seoUrl: Schema.Attribute.String;
  };
}

export interface SharedBreadcrumb extends Struct.ComponentSchema {
  collectionName: "components_shared_breadcrumbs";
  info: {
    description: "";
    displayName: "Breadcrumb";
  };
  attributes: {
    name: Schema.Attribute.Enumeration<["Breadcrumb"]> & Schema.Attribute.DefaultTo<"Breadcrumb">;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: "components_shared_buttons";
  info: {
    description: "";
    displayName: "Button";
  };
  attributes: {
    link: Schema.Attribute.String;
    size: Schema.Attribute.Enumeration<["large", "small"]>;
    text: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<["primary", "secondary"]>;
  };
}

export interface SharedCategory extends Struct.ComponentSchema {
  collectionName: "components_shared_categories";
  info: {
    description: "";
    displayName: "Category";
  };
  attributes: {
    imageUrl: Schema.Attribute.String;
    name: Schema.Attribute.String;
    seoUrl: Schema.Attribute.String;
  };
}

export interface SharedHtml extends Struct.ComponentSchema {
  collectionName: "components_shared_htmls";
  info: {
    description: "";
    displayName: "HTML";
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: "components_shared_media";
  info: {
    displayName: "Media";
    icon: "file-video";
  };
  attributes: {
    file: Schema.Attribute.Media<"images" | "files" | "videos">;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: "components_shared_quotes";
  info: {
    displayName: "Quote";
    icon: "indent";
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: "components_shared_rich_texts";
  info: {
    description: "";
    displayName: "Rich text";
    icon: "align-justify";
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedScrollTile extends Struct.ComponentSchema {
  collectionName: "components_shared_scroll_tiles";
  info: {
    displayName: "ScrollTile";
  };
  attributes: {
    altText: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    imageSrc: Schema.Attribute.String;
    link: Schema.Attribute.String;
    tagline: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: "components_shared_seos";
  info: {
    description: "";
    displayName: "Seo";
    icon: "allergies";
    name: "Seo";
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<"images">;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: "components_shared_sliders";
  info: {
    description: "";
    displayName: "Slider";
    icon: "address-book";
  };
  attributes: {
    files: Schema.Attribute.Media<"images", true>;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "home.daily-pick": HomeDailyPick;
      "home.hero-banner": HomeHeroBanner;
      "home.scroll-tiles": HomeScrollTiles;
      "pdp.article": PdpArticle;
      "pdp.cta-button": PdpCtaButton;
      "pdp.delivery-and-store": PdpDeliveryAndStore;
      "pdp.description": PdpDescription;
      "pdp.gallery": PdpGallery;
      "pdp.price": PdpPrice;
      "pdp.product-detail": PdpProductDetail;
      "pdp.product-main-content": PdpProductMainContent;
      "pdp.product-primary-row": PdpProductPrimaryRow;
      "pdp.title": PdpTitle;
      "pdp.video": PdpVideo;
      "plp.main-content": PlpMainContent;
      "plp.shop-by-brand": PlpShopByBrand;
      "plp.shop-by-category": PlpShopByCategory;
      "shared.brand": SharedBrand;
      "shared.breadcrumb": SharedBreadcrumb;
      "shared.button": SharedButton;
      "shared.category": SharedCategory;
      "shared.html": SharedHtml;
      "shared.media": SharedMedia;
      "shared.quote": SharedQuote;
      "shared.rich-text": SharedRichText;
      "shared.scroll-tile": SharedScrollTile;
      "shared.seo": SharedSeo;
      "shared.slider": SharedSlider;
    }
  }
}
