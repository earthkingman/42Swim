import useSWR from "swr";
import axios from "axios";

const fetcher = async (url: string) => {
  const res = await axios.get(url);
  console.log(res.data);
  return res.data;
};

const useList = (keyword: string, page: number) => {
  const url = `${
    import.meta.env.VITE_API_HOST
  }/pages/list/question/keyword?pageNumber=${page}&keyword=${keyword}`;
  const { data, error } = useSWR(url, fetcher);

  return {
    question: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useList;
