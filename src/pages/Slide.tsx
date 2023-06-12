import { useSelector } from "react-redux";
import { RootState } from "../store";
import data from "../img"
import { useState } from "react";

const Slide = () => {
    const account = useSelector((state: RootState) => state.auth.account);
    document.title = "Balfreya - Slide" + (account ? ` : ${account.username}` : "");
    const [slide, setSlide] = useState(0);

    const prev = () => {
        return slide !== 0 ? slide - 1 : data.length - 1;
    }
    const next = () => {
        return slide !== data.length - 1 ? slide + 1 : 0;
    }

    return (
        <main className="container_slide">
            <div className="container_img">
                <img className="img_prev" src={data[prev()]} alt="slide" />
                <img className="img_slide" src={data[slide]} alt="slide" />
                <img className="img_next" src={data[next()]} alt="slide" />
            </div>
            <div className="container_button">
                <div className="nav_btn" onClick={() => {
                    setSlide(prev())
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Prev
                </div>
                <div className="nav_btn" onClick={() => {
                    setSlide(next())
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