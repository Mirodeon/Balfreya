import { useEffect, useState } from "react";
import { DataNav } from "../header/NavItem";
import { setStyles as Styles } from ".";
import { useLocation, useNavigate } from "react-router-dom";
import { fetcher } from "../../utils/axios";
import { DataLayout } from "./LayoutGrid";

export type DataFactory = {
  [key: string]: any;
  nav: DataNav[];
  styles: Styles.DataStyles;
  layout: DataLayout[];
};

const useDataFactory = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<DataFactory | null>(null);
  const userRequested = useLocation().pathname.split("/")[1];

  useEffect(() => {
    fetcher(`/factory/${userRequested}`)
      .then((data) => setData(data))
      .catch((err) => {
        console.log(process.env.REACT_APP_API_URL);
        console.log(err);
        navigate("/");
      });
    // eslint-disable-next-line
  }, []);

  return data;
};

export default useDataFactory;
