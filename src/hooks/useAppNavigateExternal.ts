/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';
// import { useLocation } from 'react-router-dom';
// import { logMain } from 'src/modules/logger/logger';

interface Options {
  newWindow?: boolean;
  gtmEvent?: (() => void) | null;
}

export const useAppNavigateExternal = () => {
  // const routerLocation = useLocation();

  const handleNavigateExternal = useMemo(
    () => (to: string, options: Options) => {
      const { newWindow = false, gtmEvent = () => null } = options;

      // If a google tag manager event is passed in, fire it
      if (gtmEvent) {
        gtmEvent();
      }

      // Open the link in a new window or redirect to the link
      if (newWindow) {
        window.open(to, '_blank');
      } else {
        window.location.href = to;
      }
    },
    [],
  );

  return handleNavigateExternal;
};
