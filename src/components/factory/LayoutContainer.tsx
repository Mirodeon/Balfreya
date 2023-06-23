import { PropsWithChildren } from "react";

const LayoutContainer = (props: PropsWithChildren) => {
    return (
        <main className="main_layout_container">
            {props.children}
        </main>
    )
}

export default LayoutContainer;