import { useMemo } from 'react';
import { useLocation, useNavigate, NavigateFunction, To, RelativeRoutingType } from 'react-router-dom';

interface Options {
  navigateOpts?: {
    replace?: boolean;
    state?: any;
    relative?: RelativeRoutingType;
  };
  gtmEvent?: (() => void) | null;
}

export const useAppNavigateInternal = () => {
  const routerLocation = useLocation();
  const navigate: NavigateFunction = useNavigate();

  const handleNavigateInternal = useMemo(
    () => (to: To | number, options: Options | null) => {
      const { navigateOpts = {}, gtmEvent = () => null } = options || {};

      // If theres no anchor tag in the url, scroll to the top of the page
      if (typeof to === 'string') {
        if (to.indexOf('#') === -1) {
          window.scrollTo({ top: 0, left: 0 });
        }
      }

      // If a google tag manager event is passed in, fire it
      if (gtmEvent) {
        gtmEvent();
      }

      // If the to param is a number, it's a history stack number, so don't append options
      // If there are options, use the navigate function with the options
      // Otherwise, just use the navigate function
      if (typeof to === 'number') {
        navigate(to);
      } else if (navigateOpts && Object.keys(navigateOpts).length > 0) {
        navigate(to, navigateOpts);
      } else {
        navigate(to);
      }
    },
    [routerLocation.pathname, navigate],
  );

  return handleNavigateInternal;
};
