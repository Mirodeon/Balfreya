import { useEffect, useState } from "react";
import { DataNav } from "../../header/NavItem";
import { setStyles } from "..";
import { fetcher } from "../../../utils/axios";
import { DataFactory } from "../useDataFactory";

const useDataTestfactory = (): DataFactory | null => {
    const [dataNav, setDataNav] = useState<DataNav[] | null>(null);
    const [dataStyle, setDataStyle] = useState<setStyles.DataStyles | null>(null);
    const [datalayout, setDataLayout] = useState<any | null>(null);

    useEffect(() => {
        fetcher("/test/testNav.json").then((res) => {
            if (res) {
                setDataNav(res);
            }
            console.log(res);
        })
        fetcher("/test/testStyles.json").then((res) => {
            if (res) {
                setDataStyle(res);
            }
            console.log(res);
        })
        fetcher("/test/testLayout.json").then((res) => {
            if (res) {
                setDataLayout(res);
            }
            console.log(res);
        })
        // eslint-disable-next-line
    }, []);

    return dataNav && dataStyle ? { nav: dataNav, styles: dataStyle, layout: datalayout } : null;
}

export default useDataTestfactory;