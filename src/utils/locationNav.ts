import { resetStyles } from "../components/factory/setStyles";

const locationNav = (currentPath: string, navLocation: { path: string; className: string; }[], origin: boolean) => {
    let activeNavBtns = document.querySelectorAll(".currentLocation");
    let originHeader = document.querySelector(".origin_header");
    let locate = false;

    activeNavBtns.forEach((btn) => {
        btn.classList.remove("currentLocation");
    });

    navLocation.forEach((item) => {
        if (currentPath === item.path) {
            let currentNav = document.querySelectorAll(`.${item.className}`);
            currentNav.forEach((item) => item.classList.add("currentLocation"));
            locate = true;
        }
    });

    if (locate && origin) {
        originHeader?.classList.remove("hide_in_top");
        resetStyles();
    } else {
        originHeader?.classList.add("hide_in_top");
    }
};

export default locationNav;