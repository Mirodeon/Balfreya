import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const useByPath = (data: { path: string, [key: string]: any }[], callback: (item?: any) => any) => {
    const currentPath = useLocation().pathname;
    const savedCallback = useRef<((item?: any) => any) | null>(null);

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        const action = (data: { path: string, [key: string]: any }[]) => {
            data.forEach((item) => {
                if (currentPath.includes(item.path)) {
                    if (savedCallback.current) { savedCallback.current(item); }
                }
            });
        };
        if (data !== null) {
            action(data);
        }
    }, [callback, currentPath, data]);
}

export default useByPath;