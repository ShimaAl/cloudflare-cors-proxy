export default {
  async fetch(request, env, ctx) {
    const response = await fetch(request)
    const newHeaders = new Headers(response.headers)

    newHeaders.set("Access-Control-Allow-Origin", "https://3dmodels.org")
    newHeaders.set("Access-Control-Allow-Methods", "GET, OPTIONS")
    newHeaders.set("Access-Control-Allow-Headers", "*")

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: newHeaders
      })
    }

    return new Response(response.body, {
      status: response.status,
      headers: newHeaders
    })
  }
}
