import useSWR from "swr";
import axios from "axios";

const fetcher = async (url: string) => {
  const res = await axios.get(url);
  console.log(res.data);
  return res.data;
};

const useList = (category: string, page: number) => {
  const url =
    category === "normal"
      ? `${
          import.meta.env.VITE_API_HOST
        }/pages/list/question?pageNumber=${page}`
      : "";
  const { data, error } = useSWR(url, fetcher);

  return {
    question: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useList;
