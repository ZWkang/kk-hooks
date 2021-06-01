import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import useFlag from 'lib/useFlag';

function useDocumentTitle(title: string, infin: boolean) {
  const { flag, cancel } = useFlag(false);
  const values = useMemo(() => (infin ? undefined : [title]), [infin]);
  useEffect(() => {
    if (flag) {
      document.title = title;
    }
  }, values);

  return {
    stop: cancel
  };
}

export default useDocumentTitle;
