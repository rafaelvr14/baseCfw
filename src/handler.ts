import { routes } from "./routes"
import { notFoundRoute } from "./services/notFoundRoute"

function routerHandler(event: FetchEvent) {
  const url = new URL(event.request.url)
  const route = routes[url.pathname] || notFoundRoute
  return route(event)
}

export function handleEvent(event: FetchEvent) {
  return routerHandler(event)
}
