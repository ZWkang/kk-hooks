import React, { useRef, useEffect } from 'react';

interface IuseMountType {
  (): void;
}

function useMount(mountFunc: IuseMountType) {
  const mountFuncRef = useRef<IuseMountType>(mountFunc);

  useEffect(() => {
    mountFuncRef.current();
  }, []);
  return {};
}

export default useMount;
