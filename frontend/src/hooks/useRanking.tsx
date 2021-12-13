import useSWR from "swr";
import axios from "axios";

const fetcher = async (url: string) => {
  const res = await axios.get(url);
  console.log(res.data);
  return res.data;
};

const useRanking = () => {
  const url = `${import.meta.env.VITE_API_HOST}/users/ranking`;
  const { data, error } = useSWR(url, fetcher);

  const month = data?.monthRankerInfo.filter((d) => d.id != null);
  const total = data?.totalRankerInfo.filter((d) => d.id != null);

  console.log("ranking data", data);
  return {
    ranking: { month: month, total: total },
    isLoading: !error && !data,
    isError: error,
  };
};

export default useRanking;
