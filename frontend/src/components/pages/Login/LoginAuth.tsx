import { useEffect } from "react";
import { useLocation } from "react-router";

export default function LoginAuth() {
  const location = useLocation().search;
  const code = new URLSearchParams(location).get("code");

  useEffect(() => {
    const getData = async () => {
      console.log("AuthLogin");
      console.log(code);
    };
    getData();
  }, []);

  return <div>HI</div>;
}
