import type { Schema, Struct } from "@strapi/strapi";

export interface AbTestPencilBanner extends Struct.ComponentSchema {
  collectionName: "components_ab_test_pencil_banners";
  info: {
    displayName: "PencilBanner";
  };
  attributes: {
    name: Schema.Attribute.String;
    pencil_banner_a: Schema.Attribute.Relation<"oneToOne", "api::pencil-banner.pencil-banner">;
    pencil_banner_b: Schema.Attribute.Relation<"oneToOne", "api::pencil-banner.pencil-banner">;
  };
}

export interface PdpArticle extends Struct.ComponentSchema {
  collectionName: "components_pdp_articles";
  info: {
    displayName: "Article";
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface PdpCtaButton extends Struct.ComponentSchema {
  collectionName: "components_pdp_cta_buttons";
  info: {
    displayName: "CTAButton";
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface PdpDeliveryAndStore extends Struct.ComponentSchema {
  collectionName: "components_pdp_delivery_and_stores";
  info: {
    displayName: "DeliveryAndStore";
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface PdpDescription extends Struct.ComponentSchema {
  collectionName: "components_pdp_descriptions";
  info: {
    displayName: "Description";
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface PdpGallery extends Struct.ComponentSchema {
  collectionName: "components_pdp_galleries";
  info: {
    displayName: "Gallery";
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface PdpPrice extends Struct.ComponentSchema {
  collectionName: "components_pdp_prices";
  info: {
    displayName: "price";
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface PdpTitle extends Struct.ComponentSchema {
  collectionName: "components_pdp_titles";
  info: {
    displayName: "title";
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface PdpVideo extends Struct.ComponentSchema {
  collectionName: "components_pdp_videos";
  info: {
    displayName: "Video";
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface PlaceholderPageTemplate extends Struct.ComponentSchema {
  collectionName: "components_placeholder_page_templates";
  info: {
    displayName: "PageTemplate";
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface PlpResults extends Struct.ComponentSchema {
  collectionName: "components_plp_results";
  info: {
    description: "";
    displayName: "Results";
  };
  attributes: {
    algoliaQuery: Schema.Attribute.JSON;
    name: Schema.Attribute.String;
  };
}

export interface ReferencesBanner extends Struct.ComponentSchema {
  collectionName: "components_references_banners";
  info: {
    displayName: "Banner";
  };
  attributes: {
    banner: Schema.Attribute.Relation<"oneToOne", "api::banner.banner">;
  };
}

export interface ReferencesFooter extends Struct.ComponentSchema {
  collectionName: "components_references_footers";
  info: {
    displayName: "Footer";
  };
  attributes: {
    footer: Schema.Attribute.Relation<"oneToOne", "api::footer.footer">;
  };
}

export interface ReferencesHeader extends Struct.ComponentSchema {
  collectionName: "components_references_headers";
  info: {
    displayName: "Header";
  };
  attributes: {
    header: Schema.Attribute.Relation<"oneToOne", "api::header.header">;
  };
}

export interface ReferencesNestedLayout extends Struct.ComponentSchema {
  collectionName: "components_references_nested_layouts";
  info: {
    description: "";
    displayName: "NestedLayout";
  };
  attributes: {
    name: Schema.Attribute.String;
    nested_layout: Schema.Attribute.Relation<"oneToOne", "api::nested-layout.nested-layout">;
  };
}

export interface ReferencesWidgetComponent extends Struct.ComponentSchema {
  collectionName: "components_references_widget_components";
  info: {
    displayName: "widgetComponent";
    icon: "dashboard";
  };
  attributes: {
    widgets: Schema.Attribute.Relation<"oneToMany", "api::widget.widget">;
  };
}

export interface SharedBreadcrumb extends Struct.ComponentSchema {
  collectionName: "components_shared_breadcrumbs";
  info: {
    displayName: "Breadcrumb";
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface SharedDailyPick extends Struct.ComponentSchema {
  collectionName: "components_shared_daily_picks";
  info: {
    displayName: "DailyPick";
  };
  attributes: {
    config: Schema.Attribute.JSON;
    name: Schema.Attribute.String;
  };
}

export interface SharedHtml extends Struct.ComponentSchema {
  collectionName: "components_shared_htmls";
  info: {
    displayName: "HTML";
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface SharedMetaData extends Struct.ComponentSchema {
  collectionName: "components_shared_meta_data";
  info: {
    displayName: "MetaData";
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
  };
}

export interface SharedShopByCategories extends Struct.ComponentSchema {
  collectionName: "components_shared_shop_by_categories";
  info: {
    displayName: "ShopByCategories";
  };
  attributes: {
    categories: Schema.Attribute.Relation<"oneToMany", "api::category.category">;
    title: Schema.Attribute.String;
  };
}

export interface SharedTagGroup extends Struct.ComponentSchema {
  collectionName: "components_shared_tag_groups";
  info: {
    displayName: "TagGroup";
  };
  attributes: {
    tags: Schema.Attribute.Relation<"oneToMany", "api::tag.tag">;
    title: Schema.Attribute.String;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "ab-test.pencil-banner": AbTestPencilBanner;
      "pdp.article": PdpArticle;
      "pdp.cta-button": PdpCtaButton;
      "pdp.delivery-and-store": PdpDeliveryAndStore;
      "pdp.description": PdpDescription;
      "pdp.gallery": PdpGallery;
      "pdp.price": PdpPrice;
      "pdp.title": PdpTitle;
      "pdp.video": PdpVideo;
      "placeholder.page-template": PlaceholderPageTemplate;
      "plp.results": PlpResults;
      "references.banner": ReferencesBanner;
      "references.footer": ReferencesFooter;
      "references.header": ReferencesHeader;
      "references.nested-layout": ReferencesNestedLayout;
      "references.widget-component": ReferencesWidgetComponent;
      "shared.breadcrumb": SharedBreadcrumb;
      "shared.daily-pick": SharedDailyPick;
      "shared.html": SharedHtml;
      "shared.meta-data": SharedMetaData;
      "shared.shop-by-categories": SharedShopByCategories;
      "shared.tag-group": SharedTagGroup;
    }
  }
}
