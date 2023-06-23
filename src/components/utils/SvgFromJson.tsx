import { INode } from "../../type/type";

type SvgFromJsonProps = {
    data: INode;
}

const SvgFromJson = (props: SvgFromJsonProps) => {
    return <svg
        xmlns={props.data.attributes.xmlns}
        width={props.data.attributes.width}
        height={props.data.attributes.height}
        fill={props.data.attributes.fill}
        viewBox={props.data.attributes.viewBox}
    >
        {props.data.children.map(path =>
            <path
                d={path.attributes.d}
                fillRule={
                    path.attributes.fillRule === ("evenodd" || "nonzero" || "inherit")
                        ? path.attributes.fillRule
                        : undefined
                }
                key={props.data.children.indexOf(path)}
            >
            </path>
        )}
    </svg>
}

export default SvgFromJson;