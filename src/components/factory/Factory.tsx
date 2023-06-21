import Header from "../header/Header";
import { Responsive } from "../../utils/useResponsive";
import useHealthCheck from "../../utils/usehealthCheck";
import { Status } from "../auth";
import { RoutesLayout, setStyles as Styles, useDataFactory } from ".";
import { useEffect } from "react";
import useDataTestFactory from "./test/useDataTestFactory";

type FactoryProps = {
  responsive: Responsive;
};

const Factory = (props: FactoryProps) => {
  const status = useHealthCheck();
  const data = useDataTestFactory();

  useEffect(() => {
    if (data) {
      Styles.setStyles(data.styles);
    }
  }, [data]);

  return (
    <>
      {status.connect && data ? (
        <>
          <Header
            responsive={props.responsive}
            main={false}
            title={data.title}
            data={data.nav}
          />
          <RoutesLayout data={data.layout} />
        </>
      ) : (
        <Status status={status} />
      )}
    </>
  );
};

export default Factory;
