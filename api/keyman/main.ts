/**
 * This acts like a middle man keeping our key secret from the frontend
 */

// This is the secret we want to keep from the frontend
// Also this is not something you want exposed in a public
// GitHub repository, you really do not want it in any repository,
// but this allows us to keep it somewhat secret while avoiding
// quite a bit of complexity
const API_KEY = ""

// We have the base URL here since we will not change it in the code
const BASE_URL = "https://finnhub.io/api/v1"

const handler: any = {
  async fetch(request: Request) {

    // Setup headers
    const header = new Headers()
    header.append("X-Finnhub-Token", API_KEY)

    // Setup query
    const query = "/search?q=apple"

    // Do fetch and wait for response
    const res = await fetch(BASE_URL + query, { headers: header })

    // Pass response along to frontend
    return new Response(res.body, {
      headers: {
        "content-type": "application/json",
      },
    });
  },
};

export default handler;