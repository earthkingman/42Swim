import axios from "axios";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await axios({
    method: "post",
    url: url,
    withCredentials: true,
  });
  console.log(res.data);
  return res.data;
};

const useAuth = () => {
  // 이거 url 없네
  const url = `http://localhost:5000/users/info`;
  const { data, error } = useSWR(url, fetcher);

  console.log("useAuth user", data);
  // mutate 사용해서 logout 구현하기 파라미터 어떻게 구현할지 생각해보기
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useAuth;
