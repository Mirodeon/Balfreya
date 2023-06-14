import { useSelector } from "react-redux";
import { RootState } from "../store";
import data from "../img"
import { useEffect, useState } from "react";
import useTimeOut from "../utils/useTimeOut";
import { addClassName, removeClassName } from "../utils/addClassName";

const Slide = () => {
    const account = useSelector((state: RootState) => state.auth.account);
    document.title = "Balfreya - Slide" + (account ? ` : ${account.username}` : "");
    const [slide1, setSlide1] = useState(0);
    const [slide2, setSlide2] = useState(0);
    const [bg1, setBg1] = useState<string>("");
    const [bg2, setBg2] = useState<string>("");
    const [container, setContainer] = useState<1 | 2>(1)
    const [direction, setDirection] = useState<"next" | "prev" | null>(null)

    const prev = (slide: number) => {
        return slide !== 0 ? slide - 1 : data.length - 1;
    }
    const next = (slide: number) => {
        return slide !== data.length - 1 ? slide + 1 : 0;
    }

    const sliding = (nextSlide: (slide: number) => number, orientation: "next" | "prev") => {
        if (!direction) {
            if (container === 1) {
                setSlide2(nextSlide(slide1))
            } else {
                setSlide1(nextSlide(slide2))
            }
            addClassName([orientation], container === 1 ? ".container_2" : ".container_1")
            removeClassName(["not_display"], container === 1 ? ".container_2" : ".container_1")
            addClassName([`move_${orientation}`], ".container_img")
            setDirection(orientation)
        }
    }

    useTimeOut(
        () => {
            addClassName(["not_display"], container === 1 ? ".container_1" : ".container_2")
            removeClassName(direction === "next" ? ["move_next", "next"] : ["move_prev", "prev"], ".container_img")
            setContainer(container === 1 ? 2 : 1)
            setDirection(null)
        },
        direction ? 700 : null
    );

    const getAverageRgb = (src: string): Promise<Uint8ClampedArray> => {
        return new Promise(resolve => {
            let context = document.createElement('canvas').getContext('2d');
            context!.imageSmoothingEnabled = true;

            let img = new Image();
            img.src = src;
            img.crossOrigin = "";

            img.onload = () => {
                context!.drawImage(img, 0, 0, 1, 1);
                resolve(context!.getImageData(0, 0, 1, 1).data.slice(0, 3));
            };
        });
    }

    useEffect(() => {
        getAverageRgb(data[slide1])
            .then(res =>
                setBg1(`radial-gradient(rgba(${res[0]}, ${res[1]}, ${res[2]}, 0.5), black 100%)`)
            );
    }, [slide1]);

    useEffect(() => {
        getAverageRgb(data[slide2])
            .then(res =>
                setBg2(`radial-gradient(rgba(${res[0]}, ${res[1]}, ${res[2]}, 0.5), black 100%)`)
            );
    }, [slide2]);

    return (
        <main className="container_slide">
            <div className="container_slide_img">
                <div className="container_img container_2 not_display" style={{ background: bg2 }}>
                    <img className="img_slide" src={data[slide2]} alt="slide" />
                </div>
                <div className="container_img container_1" style={{ background: bg1 }}>
                    <img className="img_slide" src={data[slide1]} alt="slide" />
                </div>
            </div>
            <div className="container_button">
                <div className="nav_btn" onClick={() => {
                    sliding(prev, "prev")
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Prev
                </div>
                <div className="nav_btn" onClick={() => {
                    sliding(next, "next")
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