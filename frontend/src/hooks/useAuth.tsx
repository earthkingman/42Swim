import axios from "axios";
import useSWR from "swr";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import useSWRImmutable from "swr/immutable";

const fetcher = async (url: string) => {
  const res = await axios({
    method: "get",
    url: url,
    withCredentials: true,
  }).catch((err) => {
    console.error("err", err);
  });

  console.log("kikires", res);
  console.log("useruser", res.data.data);
  return res.data.data;
};

const useAuth = () => {
  // 이거 url 없네
  const url = `${import.meta.env.VITE_API_HOST}/users/info`;
  const { data, error } = useSWR(url, fetcher);

  console.log(location);

  console.log("useAuth user", data);
  // mutate 사용해서 logout 구현하기 파라미터 어떻게 구현할지 생각해보기
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useAuth;
