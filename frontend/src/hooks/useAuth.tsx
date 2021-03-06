import axios from "axios";
import useSWRImmutable from "swr/immutable";

const fetcher = async (url: string) => {
  const res = await axios({
    method: "get",
    url: url,
    withCredentials: true,
  })
    .then((response) => response.data)
    .catch((err) => {
      console.error(err);
      throw err;
    });
  return res;
};

const useAuth = () => {
  // 이거 url 없네
  const url = `${import.meta.env.VITE_API_HOST}/users/info`;
  const { data, mutate, error } = useSWRImmutable(url, fetcher);

  mutate();
  // mutate 사용해서 logout 구현하기 파라미터 어떻게 구현할지 생각해보기
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useAuth;
