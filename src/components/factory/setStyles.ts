export interface DataStyles {
    [key: string]: string;
    "primary": string;
    "primary-light": string;
    "secondary": string;
    "secondary-light": string;
    "tertiary": string;
    "tertiary-light": string;
    "error": string;
}

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