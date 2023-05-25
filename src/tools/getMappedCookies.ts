export const getMappedCookies = (): Record<string, string> => {
  const cookies = document.cookie;
  const elements = cookies.split(';');
  const mappedCookies: Record<string, string> = {};

  elements.forEach((cookie: string) => {
    const [key, value]: string[] = cookie.split('=');

    mappedCookies[key.trim()] = decodeURIComponent(value);
  });

  return mappedCookies;
};
