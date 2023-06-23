import { resetStyles } from "../components/factory/useStyles";
import { DataNavList } from "../type/type";

export const isLocate = (currentPath: string, navLocation: DataNavList[], callBack?: (item: DataNavList) => void) => {
    let locate = false;
    navLocation.forEach((item) => {
        if (currentPath === item.path) {
            if (callBack) {
                callBack(item);
            }
            locate = true;
        }
    });
    return locate
}

const resetLocate = () => {
    let activeNavBtns = document.querySelectorAll(".currentLocation");
    activeNavBtns.forEach((btn) => {
        btn.classList.remove("currentLocation");
    });
}

const locationNav = (currentPath: string, navLocation: DataNavList[], origin: boolean) => {
    resetLocate()
    let locate = isLocate(
        currentPath,
        navLocation,
        (item: DataNavList) => {
            let currentNav = document.querySelectorAll(`.${item.className}`);
            currentNav.forEach((item) => item.classList.add("currentLocation"));
        }
    );
    let originHeader = document.querySelector(".origin_header");
    if (locate && origin) {
        originHeader?.classList.remove("hide_in_top");
        resetStyles();
    } else {
        originHeader?.classList.add("hide_in_top");
    }
}

export default locationNav;