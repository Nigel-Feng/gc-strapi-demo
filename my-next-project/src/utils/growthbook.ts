const { GrowthBookClient } = require("@growthbook/growthbook");

let growthbook: any = null;

const getGrowthbook = async () => {
  if (growthbook) {
    return growthbook;
  }

  const innerGrowthbook = new GrowthBookClient({
    apiHost: process.env.GROWTHBOOK_API_HOST,
    clientKey: process.env.GROWTHBOOK_CLIENT_KEY,
    trackingCallback: (experiment: any, result: any, userContext: any) => {
      // TODO: Use your real analytics tracking system
      console.log("Viewed Experiment", userContext.attributes.id, {
        experimentId: experiment.key,
        variationId: result.key,
      });
    },
  });

  await innerGrowthbook.init({ timeout: 60_000 });

  growthbook = innerGrowthbook;

  return innerGrowthbook;
};

export default getGrowthbook;
