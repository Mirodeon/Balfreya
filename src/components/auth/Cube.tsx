import { StatusResponse } from "../../utils/usehealthCheck";

type CubeProps = {
  status: StatusResponse["className"];
};

const Cube = (props: CubeProps) => {
  return (
    <div className={"container_cube" + props.status}>
      <div className="cube">
        <div className="top"></div>
        <div className="face_cube">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Cube;
