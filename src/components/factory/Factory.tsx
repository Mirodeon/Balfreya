import Header from "../header/Header";
import { Responsive } from "../../utils/useResponsive";
import useHealthCheck from "../../utils/usehealthCheck";
import { Status } from "../auth";
import { LayoutGrid, setStyles as Styles, useDataFactory } from ".";
import { useEffect, useState } from "react";
import useDataTestFactory from "./test/useDataTestFactory";
import { RouteObject, useRoutes } from "react-router-dom";
import RoutesLayout from "./RoutesLayout";
import RouterFactory from "./RouterFactory";

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
            title={"Factory"}
            data={data.nav}
          />
          <RouterFactory data={data} />
        </>
      ) : (
        <Status status={status} />
      )}
    </>
  );
};

export default Factory;
