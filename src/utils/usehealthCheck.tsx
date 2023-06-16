import axios from "axios";
import { useState, useEffect } from "react";
import useTimeOut from "./useTimeOut";

export interface StatusResponse {
  status: "pending" | "failed" | "success";
  className: " wait_check" | " fail_check" | " success_check" | "";
  connect: boolean;
}

const useHealthCheck = (): StatusResponse => {
  const [status, setStatus] = useState<"pending" | "failed" | "success">(
    "pending"
  );
  const [connect, setConnect] = useState(true);

  useTimeOut(
    () => {
      setConnect(true);
    },
    status === "success" ? 2100 : null
  );

  const className =
    status === "pending"
      ? " wait_check"
      : status === "failed"
      ? " fail_check"
      : connect
      ? ""
      : " success_check";

  useEffect(() => {
    if (process.env.REACT_APP_HEALTH_CHECK) {
      axios
        .get(process.env.REACT_APP_HEALTH_CHECK)
        .then((res) => {
          if (res) {
            setStatus("success");
          }
        })
        .catch((err) => {
          setStatus("failed");
          console.log(err);
        });
    }
    // eslint-disable-next-line
  }, []);

  return { status: status, className: className, connect: connect };
};

export default useHealthCheck;
