import { useEffect, useState } from "react";

export const useErrorTime = () => {
  const [textError, setTextError] = useState("");

  useEffect(() => {
    if (textError === "") return;
    const timer = setTimeout(() => {
      setTextError("");
    }, 2500);
    return () => {
      clearTimeout(timer);
    };
  }, [textError]);

  return { textError, setTextError };
};
