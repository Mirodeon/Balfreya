export const addClassName = (className: string[], selector: string, index?: number) => {
    const node: NodeListOf<Element> = document.querySelectorAll(selector);
    if (index) {
        if (node[index]) {
            node[index].classList.add(...className);
        }
    } else {
        node.forEach(
            elem => elem.classList.add(...className)
        )
    }
};

export const removeClassName = (className: string[], selector: string, index?: number) => {
    const node: NodeListOf<Element> = document.querySelectorAll(selector);
    if (index) {
        if (node[index]) {
            node[index].classList.remove(...className);
        }
    } else {
        node.forEach(
            elem => elem.classList.remove(...className)
        )
    }
};