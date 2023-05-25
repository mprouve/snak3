import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const useQuery = (params: string[]) => {
  const { search } = useLocation();

  return useMemo(() => {
    const query = new URLSearchParams(search);

    return params.map(param => query.get(param));
  }, [params, search]);
};
