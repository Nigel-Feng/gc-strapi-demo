const { errors } = require("@strapi/utils");

const uid = "api::page.page";

module.exports = {
  async beforeUpdate(event) {
    const fromLifeCycle = Object.entries(event.params.data).every(([key, value]) => {
      return key === "publish_state" ? value === "previewed" : ["publishedAt", "updatedAt"].includes(key);
    });

    if (fromLifeCycle) {
      return;
    }

    const ctx = strapi.requestContext.get();
    const isPublish = ctx?.request?.url?.includes?.("/publish");

    event.params.data.publish_state = "draft";

    if (!isPublish) {
      return;
    }

    const page = await strapi.documents(uid).findOne({
      documentId: ctx.params.id,
    });

    const isPreviewed = page.publish_state === "previewed";

    if (!isPreviewed) {
      throw new errors.ApplicationError("This page can not be published as it's not be previewed");
    }
  },
  async beforeFindOne(event) {
    const isPreview = event?.params?.preview === "true";
    const documentId = event.params?.where?.documentId;

    if (isPreview && documentId) {
      await strapi.documents(uid).update({
        documentId,
        data: {
          publish_state: "previewed",
        },
      });
    }
  },
};
