import useSWR from "swr";
import axios from "axios";
import queryString from "query-string";

const fetcher = (url: string) =>
  axios.get(url).then((res) => {
    console.log(res);
    return res.data;
  });

const useDetail = () => {
  const questionId = queryString.parse(location.search).id;
  const { data, error } = useSWR(
    `http://localhost:5000/pages/detail/question?questionId=${questionId}`,
    fetcher
  );
  return {
    question: data ? data.questionInfo : null,
    answer: data ? data.answerInfo : null,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useDetail;
