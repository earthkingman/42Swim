import useSWR from "swr";
import axios from "axios";
const fetcher = async (url: string) => {
  const res = await axios.get(url);
  console.log(res.data);
  return res.data;
};

const useList = (menu: number, page: number) => {
  const url =
    menu === 0
      ? `${
          import.meta.env.VITE_API_HOST
        }/pages/list/question?pageNumber=${page}`
      : menu === 1
      ? `${
          import.meta.env.VITE_API_HOST
        }/pages/list/question/like?pageNumber=${page}`
      : menu === 2
      ? `${
          import.meta.env.VITE_API_HOST
        }/pages/list/question/unsolved?pageNumber=${page}`
      : menu === 3
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
