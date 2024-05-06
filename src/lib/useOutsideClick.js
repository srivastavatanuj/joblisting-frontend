import { useEffect } from "react";

const useOutsideClick = (callback) => {
  useEffect(() => {
    const handleClick = (event) => {
      callback(event.target);
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
};

export default useOutsideClick;
