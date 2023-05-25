export const getCookieByFullKey = (k: string): string | null => {
  const cookies = document.cookie;
  const elements = cookies.split(';');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < elements.length; i++) {
    const cookie: string = elements[i];
    const [key, value]: string[] = cookie.split('=');

    if (key.trim() === k) {
      return decodeURIComponent(value);
    }
  }

  return null;
};
