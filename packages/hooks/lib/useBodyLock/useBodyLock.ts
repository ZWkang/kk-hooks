import React, { useEffect } from 'react';

interface IuseBodyLockType {
  refPointer?: string ;
}

function useBodyLock(props: IuseBodyLockType) {
  const { refPointer } = props;

  useEffect(() => {
    const elemenet = <HTMLImageElement>document.querySelector(refPointer || 'body');
    if(!elemenet) return;
    const originalOverflow = window.getComputedStyle(elemenet).overflow;

    return () => {
      elemenet.style.overflow = originalOverflow
    }
  }, [refPointer])
}

export default useBodyLock;