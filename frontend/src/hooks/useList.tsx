import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import axios from "axios";
import * as Sentry from "@sentry/react";
import { countPageNum } from "../components/molecules/Pagination";

const fetcher = async (url: string) => {
  console.log("infinite url", url);
  const res = await axios
    .get(url)
    .then((res) => res.data)
    .catch((e) => {
      Sentry.captureException(e);
      throw Error();
    });
  return res;
};

const questionFetcher = async (url: string) => {
  //   console.log("infinite url", url);
  const res = await axios
    .get(url)
    .then((res) => res.data.questionList)
    .catch((e) => {
      Sentry.captureException(e);
      throw Error();
    });
  return res;
};

const questionCountFetcher = async () => {
  const res = await axios
    .get(`${import.meta.env.VITE_API_HOST}/pages/list/question?pageNumber=1`)
    .then((res) => res.data)
    .catch((e) => {
      Sentry.captureException(e);
      throw Error();
    });
  return res;
};

const getKey = (pageIndex: number, previousPageData: any) => {
  //   console.log("page", pageIndex);
  //   console.log("previousPageData", previousPageData);
  if (previousPageData && !previousPageData.length) return null;

  return `${import.meta.env.VITE_API_HOST}/pages/list/question?pageNumber=${
    pageIndex + 1
  }`;
};

export const useInfiniteList = () => {
  const { data, size, setSize, error, isValidating } = useSWRInfinite(
    getKey,
    questionFetcher
  );

  //   console.log("infinite data", data);
  //   console.log("infinite size", size);

  return {
    question: data,
    page: size,
    setPage: setSize,
    isLoading: !error && !data,
    isError: error,
    isRefreshing: isValidating && data && data.length === size,
  };
};

export const useQuestionCount = () => {
  const { data, error } = useSWR("questionCount", questionCountFetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  const limit = 8;
  console.log("data", data);

  return {
    questionCount: data?.questionCount,
    pageSize: countPageNum(limit, data?.questionCount),
    isLoading: !error && !data,
    isError: error,
  };
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

  console.log("useList", data);
  return {
    question: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useList;
