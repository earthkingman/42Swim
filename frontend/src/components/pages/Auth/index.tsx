import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import Loading from "../../atoms/Loading";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Auth = ({ ...props }) => {
  const query = location.search;
  const [loading, setLoading] = useState(true);

  console.log("query", query);

  useEffect(() => {
    const data = axios.get(
      `${import.meta.env.VITE_API_HOST}/auth/authResult${query}`
    );
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    console.log("data", data);
  }, [query]);

  //   console.log("match", props.match);
  //   console.log("location", props.location);
  //   console.log(location.search);
  if (loading) return <Loading visible={loading} />;
  else return <Redirect to="/" />;
};

export default Auth;
