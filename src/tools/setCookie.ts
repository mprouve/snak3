interface Options {
  path?: string;
  expires?: Date;
  maxAge?: number;
  secure?: boolean;
  samesite?: 'strict' | 'lax' | 'none';
}
interface SetCookieProps {
  name: string;
  value: string;
  options?: Options;
}

// Function to set cookie
// NOTE: Set Max Age to 0 to delete cookie
export const setCookie = ({ name, value, options = {} }: SetCookieProps): void => {
  const { path, expires, maxAge, secure, samesite } = options;

  // Validate options
  // NOTE: Cannot set both expires and maxAge
  // NOTE: If samesite is set to none, secure must be true
  if (expires && Number.isInteger(maxAge)) throw new Error('Cannot set both expires and maxAge.');
  if (samesite === 'none' && !secure) throw new Error('Cannot set samesite to none without secure.');

  let setterStr = '';

  setterStr = setterStr.concat(`${encodeURIComponent(name)}=${encodeURIComponent(value)};`);

  // Set options
  // NOTE: If path is not set, dont set path
  if (path) setterStr = setterStr.concat(`path=${path};`);

  // NOTE: If expires is not set, dont set expires
  if (expires) setterStr = setterStr.concat(`expires=${new Date(expires).toUTCString()};`);

  // NOTE: If maxAge is not set, dont set maxAge
  if (Number.isInteger(maxAge)) setterStr = setterStr.concat(`max-age=${maxAge};`);

  // NOTE: If secure is not set, dont set secure
  if (secure) setterStr = setterStr.concat(`secure;`);

  // NOTE: If samesite is not set, dont set samesite
  if (samesite) setterStr = setterStr.concat(`samesite=${samesite};`);

  document.cookie = setterStr;
};
