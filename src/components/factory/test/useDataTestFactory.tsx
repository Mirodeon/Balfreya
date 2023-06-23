import { useEffect, useState } from "react";
import { fetcher } from "../../../utils/axios";
import { DataFactory, DataLayout, DataNav, DataNavList, DataStyles } from "../../../type/type";

const useDataTestfactory = (): DataFactory | null => {
    const [dataNav, setDataNav] = useState<DataNav[] | null>(null);
    const [dataNavList, setDataNavList] = useState<DataNavList[] | null>(null);
    const [dataStyle, setDataStyle] = useState<DataStyles | null>(null);
    const [dataLayout, setDataLayout] = useState<DataLayout[] | null>(null);
    const [dataTitle, setDataTitle] = useState<string | null>(null);

    useEffect(() => {
        fetcher("/test/testNav.json").then((res) => {
            if (res) {
                setDataNav(res);
            }
            //console.log(res);
        })
        fetcher("/test/testNavList.json").then((res) => {
            if (res) {
                setDataNavList(res);
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

    return dataNav && dataNavList && dataStyle && dataLayout && dataTitle ?
        { nav: dataNav, navList: dataNavList, styles: dataStyle, layout: dataLayout, title: dataTitle }
        : null;
}

export default useDataTestfactory;