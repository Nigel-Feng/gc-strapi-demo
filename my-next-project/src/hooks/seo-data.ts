import type { IndexUiState } from "instantsearch.js";

export interface SEOData {
  query?: IndexUiState;
}

export interface IAlgoliaSEOContext {
  seoData: SEOData;
}

export const defaultSEOData: SEOData = {
  query: {
    refinementList: {
      "categories.lvl0": ["Guitars"],
    },
  },
};
