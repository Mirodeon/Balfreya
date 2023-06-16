import Header from "../header/Header";
import { Responsive } from "../../utils/useResponsive";
import useHealthCheck from "../../utils/usehealthCheck";
import { Status } from "../auth";
import { setStyles } from "./setStyles";
import { useEffect } from "react";
import useDataFactory from "./useDataFactory";

type FactoryProps = {
  responsive: Responsive;
};

const Factory = ({ responsive }: FactoryProps) => {
  const status = useHealthCheck();
  const data = useDataFactory();

  useEffect(() => {
    if (data) {
      setStyles(data.styles);
    }
  }, [data]);

  return (
    <>
      {status.connect && data ? (
        <Header
          responsive={responsive}
          main={false}
          title={"Factory"}
          data={data.nav}
        />
      ) : (
        <Status status={status} />
      )}
    </>
  );
};

export default Factory;
