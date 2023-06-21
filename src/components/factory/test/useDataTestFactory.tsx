import { useEffect, useState } from "react";
import { DataNav } from "../../header/NavItem";
import { setStyles } from "..";
import { fetcher } from "../../../utils/axios";
import { DataFactory } from "../useDataFactory";
import { DataLayout } from "../LayoutGrid";

const useDataTestfactory = (): DataFactory | null => {
    const [dataNav, setDataNav] = useState<DataNav[] | null>(null);
    const [dataStyle, setDataStyle] = useState<setStyles.DataStyles | null>(null);
    const [dataLayout, setDataLayout] = useState<DataLayout[] | null>(null);
    const [dataTitle, setDataTitle] = useState<string | null>(null);

    useEffect(() => {
        fetcher("/test/testNav.json").then((res) => {
            if (res) {
                setDataNav(res);
            }
            //console.log(res);
        })
        fetcher("/test/testStyles.json").then((res) => {
            if (res) {
                setDataStyle(res);
            }
            //console.log(res);
        })
        fetcher("/test/testLayout.json").then((res) => {
            if (res) {
                setDataLayout(res);
            }
            //console.log(res);
        })
        fetcher("/test/testTitle.json").then((res) => {
            if (res) {
                setDataTitle(res);
            }
            //console.log(res);
        })
        // eslint-disable-next-line
    }, []);

    return dataNav && dataStyle && dataLayout && dataTitle ?
        { nav: dataNav, styles: dataStyle, layout: dataLayout, title: dataTitle }
        : null;
}

export default useDataTestfactory;