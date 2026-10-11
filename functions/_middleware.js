export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  url.pathname = decodeURIComponent(url.pathname);
  const newRequest = new Request(url, request);
  return next(newRequest);
}
