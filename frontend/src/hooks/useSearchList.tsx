import useSWR from "swr";
import axios from "axios";

const fetcher = async (url: string) => {
  const res = await axios.get(url);
  console.log(res.data);
  return res.data;
};

const useSearchList = (menu: number, page: number, keyword: string) => {
  const orderBy = menu === 0 ? "time" : menu === 1 ? "like" : "solving";
  const url = `${
    import.meta.env.VITE_API_HOST
  }/pages/list/question/keyword?pageNumber=${page}&keyword=${keyword}&orderBy=${orderBy}`;
  const { data, error } = useSWR(url, fetcher);

  console.log("url", url);
  return {
    question: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useSearchList;
