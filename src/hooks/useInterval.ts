import { useEffect, useRef } from 'react';

type Callback = () => void;
type Delay = number;

export const useInterval = (callback: Callback, delay: Delay) => {
  const savedCallback = useRef<Callback | null>(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);

      return () => clearInterval(id);
    }

    return () => null;
  }, [delay]);
};
