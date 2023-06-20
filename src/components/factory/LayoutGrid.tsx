import { PropsWithChildren } from "react";

export interface DataLayout {
    id: number;
    gridTemplateAreas: string;
    children: number[];
    path?: string;
}

type LayoutGridProps = {
    gridTemplateAreas: string;
}

const LayoutGrid = (props: PropsWithChildren<LayoutGridProps>) => {
    return <div style={{ gridTemplateAreas: props.gridTemplateAreas }}>{props.children}</div>
}

export default LayoutGrid;