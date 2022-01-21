export const appendQueryParamsToURL = (
  url: string,
  params: { [key: string]: string }
) => {
  if (Object.keys(params).length === 0) return url;

  const formatedUrl = new URL(url);
  for (const [key, value] of Object.entries(params)) {
    formatedUrl.searchParams.set(key, value);
  }

  return formatedUrl.toString();
};
