import client from "@sanity/client";

export default client({
  projectId: "txxgjm84",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-12-19",
});
