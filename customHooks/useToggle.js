import { useState, useCallback, useMemo } from "react";

const useToggle = () => {
  const [status, setStatus] = useState(false);

  const toggle = useCallback(() => {
    setStatus((prevStatus) => !prevStatus);
  }, []);

  const setFalse = useCallback(() => {
    setStatus(false);
  }, []);

  const setTrue = useCallback(() => {
    setStatus(true);
  }, []);

  const values = useMemo(
    () => ({
      status,
      toggle,
      setTrue,
      setFalse
    }),
    [status, toggle,setFalse,setTrue]
  );

  return values;
};

export default useToggle;