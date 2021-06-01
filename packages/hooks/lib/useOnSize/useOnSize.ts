import React from 'react';

function useOnSize(func: any, deps: any[]) {
  const funcCurrent = React.useRef(() => func);

  React.useEffect(() => {
    if (funcCurrent.current) {
      window.addEventListener('size', funcCurrent.current, true);
    }
  }, deps);
}

export default useOnSize;
