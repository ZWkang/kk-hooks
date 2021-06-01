import React, { useState } from 'react';

function useBoolean(initialVal: boolean) {
  const [state, setState] = useState(initialVal);

  return {
    state,
    setTrue: () => setState(() => true),
    setFalse: () => setState(() => false),
    setState: setState,
    // 取反
    set: () => setState(prevState => !prevState)
  };
}

export default useBoolean;
