const locationNav = (currentPath: string, navLocation: { path: string; btn: string; }[]) => {
    let activeNavBtns = document.querySelectorAll(".currentLocation");
    let currentPathElements = currentPath.split("/");

    activeNavBtns.forEach((btn) => {
        btn.classList.remove("currentLocation");
    });

    navLocation.forEach((item) => {
        for (let i = 1; i < currentPathElements.length; i++) {
            if (currentPathElements[i] === item.path) {
                let currentNav = document.querySelectorAll(`.${item.btn}`);
                currentNav.forEach((item) => item.classList.add("currentLocation"));
            }
        }
    });
};

export default locationNav;