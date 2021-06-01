import React, { useCallback, useEffect, useState } from 'react';
import { compose } from 'ramda';

function useOnlineStatus(): {
  state: boolean;
} {
  const [state, setState] = useState<boolean>(() => navigator.onLine);

  const setOnLine = useCallback(() => setState(true), []);
  const setOffLine = useCallback(() => setState(false), []);

  useEffect(() => {
    window.addEventListener('online', setOnLine);
    window.addEventListener('offline', setOffLine);

    return compose(
      () => window.removeEventListener('online', setOnLine),
      () => window.removeEventListener('offline', setOffLine)
    );
  }, []);

  return {
    state
  };
}

export default useOnlineStatus;
