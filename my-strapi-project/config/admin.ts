export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
  preview: {
    enabled: true,
    config: {
      allowedOrigins: "*",
      async handler(uid, { documentId, locale, status }) {
        if (uid === "api::page.page") {
          return `${env("PREVIEW_CLIENT_URL")}/preview/${documentId}?status=${status}`;
        }

        return null;
      },
    },
  },
});
