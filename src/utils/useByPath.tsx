import { useLocation } from "react-router-dom";

const useByPath = (data: { path: string, [key: string]: any }[], callback: (data?: any) => any) => {
    const currentPath = useLocation().pathname;
    data.forEach((data) => { if (currentPath.includes(data.path)) { callback(data); } });
}

export default useByPath;