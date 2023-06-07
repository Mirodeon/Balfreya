import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect } from "react";

const useUsernameDocTitle = (title: string) => {
  const account = useSelector((state: RootState) => state.auth.account);
  useEffect(() => {
    document.title = title + (account ? ` : ${account.username}` : "");
    console.log("titre?");
    console.log(account?.username); // eslint-disable-next-line
  }, []);
};

export default useUsernameDocTitle;
