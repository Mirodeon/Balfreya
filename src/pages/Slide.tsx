import { useSelector } from "react-redux";
import { RootState } from "../store";
import data from "../img"
import { useState } from "react";
import useTimeOut from "../utils/useTimeOut";
import { addClassName, removeClassName } from "../utils/addClassName";

const Slide = () => {
    const account = useSelector((state: RootState) => state.auth.account);
    document.title = "Balfreya - Slide" + (account ? ` : ${account.username}` : "");
    const [slide, setSlide] = useState(0);
    const [direction, setDirection] = useState<"next" | "prev" | null>(null)

    const prev = () => {
        return slide !== 0 ? slide - 1 : data.length - 1;
    }
    const next = () => {
        return slide !== data.length - 1 ? slide + 1 : 0;
    }

    useTimeOut(
        () => {
            removeClassName(direction === "next" ? "move_next" : "move_prev", ".container_img")
            setSlide(direction === "next" ? next() : prev());
            setDirection(null)
        },
        direction ? 700 : null
    );

    return (
        <main className="container_slide">
            <div className="container_slide_img">
                <div className="container_img prev">
                    <img className="img_slide" src={data[prev()]} alt="slide" />
                </div>
                <div className="container_img">
                    <img className="img_slide" src={data[slide]} alt="slide" />
                </div>
                <div className="container_img next">
                    <img className="img_slide" src={data[next()]} alt="slide" />
                </div>
            </div>
            <div className="container_button">
                <div className="nav_btn" onClick={() => {
                    addClassName("move_prev", ".container_img")
                    setDirection("prev")
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Prev
                </div>
                <div className="nav_btn" onClick={() => {
                    addClassName("move_next", ".container_img")
                    setDirection("next")
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Next
                </div>
            </div>
        </main>
    );
};

export default Slide;