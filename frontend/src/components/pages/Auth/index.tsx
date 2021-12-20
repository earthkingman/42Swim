import axios from "axios";
import { useEffect } from "react";
import { Redirect } from "react-router";
import { mutate } from "swr";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Auth = ({ ...props }) => {
  const query = location.search;

  console.log("query", query);

  useEffect(() => {
    const getInfo = async () => {
      await axios.get(
        `${import.meta.env.VITE_API_HOST}/auth/authResult${query}`
      );
    };
    getInfo();
    const url = `${import.meta.env.VITE_API_HOST}/users/info`;
    mutate(url);
    // console.log("data", data);
  }, [query]);

  //   console.log("match", props.match);
  //   console.log("location", props.location);
  //   console.log(location.search);
  return <Redirect to="/" />;
};

export default Auth;
