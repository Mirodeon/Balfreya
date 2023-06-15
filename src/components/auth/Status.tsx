type StatusProps = {
  status: "pending" | "failed" | "success";
  classNameStatus: " wait_check" | " fail_check" | " success_check" | "";
};

const Status = ({ status, classNameStatus }: StatusProps) => {
  return (
    <div className={"container_status_profile" + classNameStatus}>
      <p className="status_profile">
        {status === "pending" ? (
          <>
            server is starting
            <br />
            please wait
            <br />
            (up to 30s)
          </>
        ) : status === "failed" ? (
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
