export function notFoundRoute(event:FetchEvent) {
    return new Response(`${event.request.url} não encontrada!`,{
      status: 404
    })
  }