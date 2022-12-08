import React from "react";

export const useOutsideHover = (callback) => {
  const ref = React.useRef();

  React.useEffect(() => {
    const handleOnMouseEnter = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mouseover", handleOnMouseEnter);
    console.log(ref);
    return () => {
      document.removeEventListener("mouseover", handleOnMouseEnter);
    };
  }, [ref]);
  return ref;
};
