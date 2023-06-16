import { StatusResponse } from "../../utils/usehealthCheck";

type StatusProps = {
  status: StatusResponse;
};

const Status = ({ status }: StatusProps) => {
  return (
    <div className={"container_status_profile" + status.className}>
      <p className="status_profile">
        {status.status === "pending" ? (
          <>
            server is starting
            <br />
            please wait
            <br />
            (up to 30s)
          </>
        ) : status.status === "failed" ? (
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
