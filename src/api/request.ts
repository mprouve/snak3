import { RawAxiosRequestConfig } from 'axios';
import { axios, CustomAxiosPrivate, CustomAxiosPublic } from 'src/modules/axios/config';
// import { clearBrowserSessionState } from 'src/api/auth/logout';
import { logMain } from 'src/modules/logger/logger';

// Set global variables (mostly for logger colors)
const COLOR_DEBUG = 'cyan';
const COLOR_SUCCESS = 'lightgreen';
// const COLOR_FAIL = 'yellow';
const COLOR_ERROR = 'pink';

export const request = (requestConfig: RawAxiosRequestConfig, options?: { isPublic?: boolean }) => {
  const CustomAxios = options?.isPublic ? CustomAxiosPublic : CustomAxiosPrivate; // Select correct axios instance for request type (public / private)
  const { method, url } = requestConfig;

  logMain.debug(`%c[REQUEST] ${method?.toUpperCase()} ${url}`, `color: ${COLOR_DEBUG};`);

  // Send HTTP Request using respective Axios instance (Public / Private Request)
  return CustomAxios({ ...requestConfig })
    .then(response => {
      const { status, data } = response;

      if (status < 200 || status >= 300) {
        throw new Error(data.message || `Request failed with status ${status}`);
      }

      logMain.debug(`%c[REQUEST] ${method?.toUpperCase()} ${url} ${status}`, `color: ${COLOR_SUCCESS};`, { data });

      return Promise.resolve(response.data);
    })
    .catch(e => {
      logMain.debug(
        `%c[REQUEST] ${method?.toUpperCase()} ${url} ${e?.response?.status || null}`,
        `color: ${COLOR_ERROR};`,
      );

      // if (e?.response?.status === 403) {
      //   logMain.error('403 - Clearing browser session state');

      //   clearBrowserSessionState();
      // }

      if (axios.isAxiosError(e)) {
        logMain.debug(`%c[REQUEST] (ERROR) Axios Error --> ${e.message}`, `color: ${COLOR_ERROR};`);

        return Promise.reject(new Error(e.message));
      }

      logMain.debug('%c[REQUEST] (ERROR) Unexpected Error -->', `color: ${COLOR_ERROR};`, e);

      return Promise.reject(new Error('An unexpected error occurred.'));
    });
};
