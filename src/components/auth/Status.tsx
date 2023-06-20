import { StatusResponse } from "../../utils/usehealthCheck";

type StatusProps = {
  status: StatusResponse;
};

const Status = (props: StatusProps) => {
  return (
    <div className={"container_status_profile" + props.status.className}>
      <p className="status_profile">
        {props.status.status === "pending" ? (
          <>
            server is starting
            <br />
            please wait
            <br />
            (up to 30s)
          </>
        ) : props.status.status === "failed" ? (
          <>
            server is offline
            <br />
            try again later
          </>
        ) : (
          <>
            server is online
            <br />
            have a good time
          </>
        )}
      </p>
    </div>
  );
};

export default Status;
