import { PropsWithChildren } from "react";

type LayoutGridProps = {
    gridTemplateAreas: string;
}

const LayoutGrid = (props: PropsWithChildren<LayoutGridProps>) => {
    return <div style={{ gridTemplateAreas: props.gridTemplateAreas }}>{props.children}</div>
}

export default LayoutGrid;