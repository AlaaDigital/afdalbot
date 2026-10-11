export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  try {
    url.pathname = decodeURIComponent(url.pathname);
  } catch(e) {}
  const newRequest = new Request(url, request);
  return next(newRequest);
}
