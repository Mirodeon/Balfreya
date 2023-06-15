const locationNav = (currentPath: string, navLocation: { path: string; className: string; }[]) => {
    let activeNavBtns = document.querySelectorAll(".currentLocation");
    let mainHeader = document.querySelector(".main_header");
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

    if (locate) {
        mainHeader?.classList.remove("hide_in_top");
    } else {
        mainHeader?.classList.add("hide_in_top");
    }
};

export default locationNav;