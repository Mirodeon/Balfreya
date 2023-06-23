import Header from "../header/Header";
import useHealthCheck from "../../utils/usehealthCheck";
import { Status } from "../auth";
import { RoutesLayout, useDataFactory, useStyles } from ".";
import useDataTestFactory from "./test/useDataTestFactory";
import { Responsive } from "../../type/type";

type FactoryProps = {
  responsive: Responsive;
};

const Factory = (props: FactoryProps) => {
  const status = useHealthCheck();
  const data = useDataTestFactory();

  useStyles(data);

  return (
    <>
      {status.connect && data ? (
        <>
          <Header
            responsive={props.responsive}
            main={false}
            title={data.title}
            dataNav={data.nav}
            dataNavList={data.navList}
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
