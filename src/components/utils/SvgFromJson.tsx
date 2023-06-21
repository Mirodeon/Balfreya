import { INode } from "../../type/type";

const SvgFromJson = (data: INode) => {
    return <svg
        xmlns={data.attributes.xmlns}
        width={data.attributes.width}
        height={data.attributes.height}
        fill={data.attributes.fill}
        viewBox={data.attributes.viewBox}
    >
        {data.children.map(path =>
            <path
                d={path.attributes.d}
                fillRule={
                    path.attributes.fillRule === ("evenodd" || "nonzero" || "inherit")
                        ? path.attributes.fillRule
                        : undefined
                }
                key={data.children.indexOf(path)}
            >
            </path>
        )}
    </svg>
}

export default SvgFromJson;