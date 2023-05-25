import { FC, ReactNode, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { logMain } from 'src/modules/logger/logger';

const RouteWrapper: FC<{ children: ReactNode; pageType: string }> = ({ children, pageType }) => {
  const routerLocation = useLocation();

  const handleOnPageChange = useCallback(() => {
    logMain.debug('%c[ROUTER]: Router updated -->', 'color: orange;', {
      data: {
        routerLocation,
        title: document.title,
        referrer: document.referrer,
        href: location.href,
        path: routerLocation.pathname,
        type: pageType,
      },
    });
  }, [pageType, routerLocation]);

  useEffect(() => {
    handleOnPageChange();
    // eslint-disable-next-line
  }, [routerLocation]);

  return <div>{children}</div>;
};

export default RouteWrapper;
