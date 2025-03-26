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
      "plp.shop-by-brand": PlpShopByBrand;
      "plp.shop-by-category": PlpShopByCategory;
      "shared.brand": SharedBrand;
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
