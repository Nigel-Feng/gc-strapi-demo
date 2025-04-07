import { includes, range } from "lodash";

export const algoliaAppId = "QEPSCA1TX4";
export const algoliaApiKey = "b375fc097d47130f9d7ffbb2e3294795";
export const algoliaIndexName = "tl1-guitarcenter";

export const categoryAttributePrefix = "categories.lvl";

export const categoriesAttributes = range(0, 6).map((level) => `${categoryAttributePrefix}${level}`);

export const isCategoryAttribute = (attribute: string) => {
  return includes(categoriesAttributes, attribute);
};
