import { useEffect } from "react";
import { DataFactory, DataStyles } from "../../type/type";

const initialState: DataStyles = {
    "primary": "",
    "primary-light": "",
    "secondary": "",
    "secondary-light": "",
    "tertiary": "",
    "tertiary-light": "",
    "error": "",
};

export const setStyles = (styles: DataStyles) => {
    let root = document.documentElement;
    Object.keys(styles).forEach(key => root.style.setProperty(`--${key}`, styles[key]));
}

export const resetStyles = () => {
    let styles = initialState;
    let cs = getComputedStyle(document.documentElement);
    Object.keys(styles).forEach(key => styles[key] = cs.getPropertyValue(`--${key}-origin`));
    setStyles(styles);
}

const useStyles = (data: DataFactory | null) => {
    useEffect(() => {
        if (data) {
            setStyles(data.styles);
        }
    }, [data]);
}

export default useStyles;