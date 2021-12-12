import axios from "axios";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await axios.get(url);
  console.log(res.data);
  return res.data;
};

export default function useTagList(page: number) {
  const url = `${
    import.meta.env.VITE_API_HOST
  }/hashtags/count?pageNumber=${page}`;
  const { data, error } = useSWR(url, fetcher);

  return {
    tagList: data && data.hashtag,
    isLoading: !error && !data,
    isError: error,
  };
}
