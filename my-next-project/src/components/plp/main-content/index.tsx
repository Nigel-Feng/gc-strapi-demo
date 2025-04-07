"use client";
import { liteClient } from "algoliasearch/lite";
import { algoliaApiKey, algoliaAppId, algoliaIndexName } from "@/config";
import { Results } from "./Results";
import { IndexUiState } from "instantsearch.js";

import { RefinementList, DynamicWidgets } from "react-instantsearch";
import { Panel } from "./Panel";
import { InstantSearchNext } from "react-instantsearch-nextjs";

const algoliaClient = liteClient(algoliaAppId, algoliaApiKey, {
  timeouts: {
    connect: 3000,
    read: 3000,
    write: 10000,
  },
});

function FallbackComponent({ attribute }: { attribute: string }) {
  if (attribute === "categories") {
    return (
      <Panel header={"categories.lvl0"}>
        <RefinementList attribute={"categories.lvl0"} />
      </Panel>
    );
  }

  if (attribute === "condition") {
    return (
      <>
        <Panel header={"condition.lvl0"}>
          <RefinementList attribute={"condition.lvl0"} />
        </Panel>
        <Panel header={"condition.lvl1"}>
          <RefinementList attribute={"condition.lvl1"} />
        </Panel>
      </>
    );
  }

  return (
    <Panel header={attribute}>
      <RefinementList attribute={attribute} />
    </Panel>
  );
}

const MainContent = ({ data }: { data: { algoliaQuery: IndexUiState } }) => {
  return (
    <InstantSearchNext
      searchClient={algoliaClient}
      indexName={algoliaIndexName}
      initialUiState={{
        [algoliaIndexName]: {
          refinementList: data.algoliaQuery?.refinementList,
        },
      }}
      insights={{ insightsInitParams: { useCookie: false, userToken: undefined } }}
      future={{ preserveSharedStateOnUnmount: true }}
    >
      <div className="flex gap-4">
        <div className="w-[280px] flex-none pt-10">
          <DynamicWidgets fallbackComponent={FallbackComponent} />
        </div>
        <div className="w-full flex-auto">
          <Results />
        </div>
      </div>
    </InstantSearchNext>
  );
};

export default MainContent;
