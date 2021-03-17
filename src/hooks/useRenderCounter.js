import { useEffect, useRef } from 'react';

const useRenderCounter = () => {
  const renderCount  = useRef(0)

  useEffect(() => {
    if (renderCount) renderCount.current++;
  })

  const clearRenderCount = () => {
    if (renderCount) renderCount.current = 0;
  }

  return { renderCount, clearRenderCount}
}

export default useRenderCounter;
