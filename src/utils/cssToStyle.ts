const cssToStyle = (style: string) => {
    const css_json = `{"${style
        .replace(/; /g, '", "')
        .replace(/: /g, '": "')
        .replace(";", "")}"}`;

    const obj = JSON.parse(css_json);

    const keyValues = Object.keys(obj).map((key) => {
        var camelCased = key.replace(/-[a-z]/g, (g) => g[1].toUpperCase());
        return { [camelCased]: obj[key] };
    });
    return Object.assign({}, ...keyValues);
}

export const addStyleToObject = (style: Object, add: string | undefined | Object) => {
    return add ? { ...style, ...(typeof add === "string" ? cssToStyle(add) : add) } : style;
}

export default cssToStyle;