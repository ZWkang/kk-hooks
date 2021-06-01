import React, { useMemo } from 'react';

function usePerformance() {
  const value = useMemo(() => window.performance, []);
  return {
    value
  };
}

export default usePerformance;
