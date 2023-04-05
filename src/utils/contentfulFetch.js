const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.NEXT_SPACE_ID,
  environment: "master", // defaults to 'master' if not set
  accessToken: process.env.NEXT_DELIVERY_API,
});

export const fetchEntries = async () => {
  const response = await client.getEntries();
  console.log(response);
  return response;
};
