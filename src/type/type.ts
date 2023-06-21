export interface AccountResponse {
    id: number;
    email: string;
    username: string;
    is_active: boolean;
}

export interface DataFactory {
    [key: string]: any;
    nav: DataNav[];
    styles: DataStyles;
    layout: DataLayout[];
    title: string;
}

export interface DataLayout {
    id: number;
    gridTemplateAreas: string;
    children: DataLayoutGridChildren[];
    path?: string;
}

export interface DataNav {
    path: string;
    className: string;
    name: string;
    icone: INode;
    pos: string;
}

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

export interface INode {
    name: string;
    type: string;
    value: string;
    attributes: {
        xmlns: string;
        width: string;
        height: string;
        fill: string;
        viewBox: string;
    };
    children: {
        name: string;
        type: string;
        value: string;
        attributes: {
            d: string;
            fillRule?: string;
        };
        children: never[];
    }[];
}

export interface DataLayoutGridChildren {
    model: number;
    gridArea: string;
}

export interface NavItems {
    [key: string]: JSX.Element[];
}

export interface Responsive {
    width: boolean;
    height: boolean;
}

export interface StatusResponse {
    status: "pending" | "failed" | "success";
    className: " wait_check" | " fail_check" | " success_check" | "";
    connect: boolean;
}