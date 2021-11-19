import axios from "axios";
import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Auth = ({ ...props }) => {
  const query = location.search;

  console.log("query", query);

  useEffect(() => {
    const data = axios.get(
      `${import.meta.env.VITE_API_HOST}/auth/authResult${query}`
    );
    console.log("data", data);
  }, [query]);

  //   console.log("match", props.match);
  //   console.log("location", props.location);
  //   console.log(location.search);
  return <div>Hi</div>;
};

export default Auth;
