import { useEffect, useState } from "react";

const useRenderCount = (deps) => {
  const [renderCount, setRenderCount] = useState(0);

  const clearCounter = () => setRenderCount(0);

  useEffect(() => {
    setRenderCount((renderCount) => renderCount + 1);
  }, deps);

  return { renderCount, clearCounter };
};

export default useRenderCount;
