import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";
import useTimeOut from "../../utils/useTimeOut";
import { addClassName, removeClassName } from "../../utils/addClassName";
import useBackgroundAverageRgb from "../../utils/useBackgroundAverageRgb";
import { NavBtnClick } from "../button";
import { addStyleToObject } from "../../utils/cssToStyle";

type SlideProps = {
  data: string[];
  width: string;
  height: string;
  id: number;
  gridArea?: string;
  cssStyle?: string;
};

const Slide = (props: SlideProps) => {
  const idLayout = `id_layout_${props.id}`;
  const [slide1, setSlide1] = useState(0);
  const [slide2, setSlide2] = useState(0);
  const [container, setContainer] = useState<1 | 2>(1);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);
  const bg1 = useBackgroundAverageRgb(props.data[slide1]);
  const bg2 = useBackgroundAverageRgb(props.data[slide2]);
  const style = addStyleToObject(
    addStyleToObject({ width: props.width, height: props.height }, props.cssStyle),
    props.gridArea ? { gridArea: props.gridArea } : props.gridArea
  );

  const prev = (slide: number) => {
    return slide !== 0 ? slide - 1 : props.data.length - 1;
  };
  const next = (slide: number) => {
    return slide !== props.data.length - 1 ? slide + 1 : 0;
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
        (container === 1 ? ".container_2" : ".container_1") + `.${idLayout}`
      );
      removeClassName(
        ["not_display"],
        (container === 1 ? ".container_2" : ".container_1") + `.${idLayout}`
      );
      addClassName([`move_${orientation}`], `.container_img.${idLayout}`);
      setDirection(orientation);
    }
  };

  useTimeOut(
    () => {
      addClassName(["not_display"], `.container_${container}.${idLayout}`);
      removeClassName([`move_${direction}`, `${direction}`], `.container_img.${idLayout}`);
      setContainer(container === 1 ? 2 : 1);
      setDirection(null);
    },
    direction ? 700 : null
  );

  return (
    <div className="container_slide" style={style}>
      <div className="container_slide_img">
        <div
          className={`container_img container_2 ${idLayout} not_display`}
          style={{ background: bg2 }}
        >
          <img className="img_slide" src={props.data[slide2]} alt="slide" />
        </div>
        <div className={`container_img container_1 ${idLayout}`} style={{ background: bg1 }}>
          <img className="img_slide" src={props.data[slide1]} alt="slide" />
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
