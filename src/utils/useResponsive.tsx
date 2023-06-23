import { useState, useEffect } from "react";
import { Responsive } from "../type/type";

type UseResponsiveProps = {
  breakWidth: number;
  breakHeight: number;
}

const useResponsive = (props: UseResponsiveProps): Responsive => {
  const [width, setWidth] = useState<number>(1024);
  const [height, setHeight] = useState<number>(768);
  const [page, setPage] = useState<HTMLElement | null>(null);
  window.onresize = () => {
    if (page) {
      setWidth(page.offsetWidth);
      setHeight(page.offsetHeight);
    }
  };

  useEffect(() => {
    let page: HTMLElement | null = document.querySelector(`#root`);
    if (page) {
      setPage(page);
      setWidth(page.offsetWidth);
      setHeight(page.offsetHeight);
    }
  }, []);

  return {
    width: width > props.breakWidth,
    height: height > props.breakHeight,
  };
};

export default useResponsive;
