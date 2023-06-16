import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";
import useTimeOut from "../../utils/useTimeOut";
import { addClassName, removeClassName } from "../../utils/addClassName";
import useBackgroundAverageRgb from "../../utils/useBackgroundAverageRgb";
import { NavBtnClick } from "../button";
import cssToStyle from "../../utils/cssToStyle";

type SlideProps = {
  data: string[];
  width: string;
  slideHeight: string;
  cssStyle?: string;
};

const Slide = ({ data, slideHeight, width, cssStyle }: SlideProps) => {
  const account = useSelector((state: RootState) => state.auth.account);
  document.title =
    "Balfreya - Slide" + (account ? ` : ${account.username}` : "");
  const [slide1, setSlide1] = useState(0);
  const [slide2, setSlide2] = useState(0);
  const [container, setContainer] = useState<1 | 2>(1);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);
  const bg1 = useBackgroundAverageRgb(data[slide1]);
  const bg2 = useBackgroundAverageRgb(data[slide2]);
  const style = cssStyle
    ? { ...{ width: width }, ...cssToStyle(cssStyle) }
    : { width: width };

  const prev = (slide: number) => {
    return slide !== 0 ? slide - 1 : data.length - 1;
  };
  const next = (slide: number) => {
    return slide !== data.length - 1 ? slide + 1 : 0;
  };

  const sliding = (
    nextSlide: (slide: number) => number,
    orientation: "next" | "prev"
  ) => {
    if (!direction) {
      if (container === 1) {
        setSlide2(nextSlide(slide1));
      } else {
        setSlide1(nextSlide(slide2));
      }
      addClassName(
        [orientation],
        container === 1 ? ".container_2" : ".container_1"
      );
      removeClassName(
        ["not_display"],
        container === 1 ? ".container_2" : ".container_1"
      );
      addClassName([`move_${orientation}`], ".container_img");
      setDirection(orientation);
    }
  };

  useTimeOut(
    () => {
      addClassName(["not_display"], `.container_${container}`);
      removeClassName([`move_${direction}`, `${direction}`], ".container_img");
      setContainer(container === 1 ? 2 : 1);
      setDirection(null);
    },
    direction ? 700 : null
  );

  return (
    <div className="container_slide" style={style}>
      <div className="container_slide_img" style={{ height: slideHeight }}>
        <div
          className="container_img container_2 not_display"
          style={{ background: bg2 }}
        >
          <img className="img_slide" src={data[slide2]} alt="slide" />
        </div>
        <div className="container_img container_1" style={{ background: bg1 }}>
          <img className="img_slide" src={data[slide1]} alt="slide" />
        </div>
      </div>
      <div className="container_button">
        <NavBtnClick
          className={""}
          content={"prev"}
          onClick={() => {
            sliding(prev, "prev");
          }}
        />
        <NavBtnClick
          className={""}
          content={"next"}
          onClick={() => {
            sliding(next, "next");
          }}
        />
      </div>
    </div>
  );
};

export default Slide;