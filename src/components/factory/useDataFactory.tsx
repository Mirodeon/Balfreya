import { useEffect, useState } from "react";
import { DataNav } from "../header/NavItem";
import { DataStyles } from "./setStyles";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { fetcher } from "../../utils/axios";

type DataFactory = {
  [key: string]: any;
  nav: DataNav[];
  styles: DataStyles;
};

const useDataFactory = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<DataFactory | null>(null);
  const userRequested = useLocation().pathname.split("/")[1];

  useEffect(() => {
    /* fetcher(`/factory/${userRequested}`)
      .then((data) => setData(data))
      .catch((err) => {
        console.log(process.env.REACT_APP_API_URL);
        console.log(err);
        navigate("/");
      }); */
    axios
      .get("http://localhost:3000/test.json")
      .then((res) => {
        if (res) {
          setData(res.data);
        }
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      });
    // eslint-disable-next-line
  }, []);

  return data;
};

export default useDataFactory;
