import React, { useEffect, useRef } from 'react';

function usePreviosValue<T>(initialValue: T): T {
  const value = useRef<T>();

  useEffect(() => {
    value.current = initialValue
  }, [initialValue])
  
  return value.current!
}

export default usePreviosValue;