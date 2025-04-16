import { strapi } from "@strapi/client";

export const strapiClient = strapi({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL!,
  auth: process.env.NEXT_PUBLIC_STRAPI_TOKEN!,
});

export const pages = strapiClient.collection("pages");

export const populate = [
  "metaData",
  "contents",
  "contents.banner",
  "contents.tags",
  "contents.categories",
  "contents.nested_layout",
  "contents.nested_layout.contents",
  "contents.nested_layout.contents.nested_layout",
  "contents.nested_layout.contents.nested_layout.contents",
  "contents.pencil_banner_a",
  "contents.pencil_banner_b",

  "page_template.contents",
  "page_template.contents.header",
  "page_template.contents.footer",
  "page_template.contents.promo_banner",
];
