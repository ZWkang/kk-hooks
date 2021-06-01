import React, { useCallback, useRef } from 'react';

function useFlag(initialFlagStatus: boolean) {
  const flag = useRef(initialFlagStatus);

  const cancel = useCallback(() => {
    flag.current = true;
  }, []);

  const start = useCallback(() => {
    flag.current = false;
  }, []);

  return {
    flag: flag.current,
    cancel,
    start
  };
}

export default useFlag;
