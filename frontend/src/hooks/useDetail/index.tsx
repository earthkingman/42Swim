import useSWR from "swr";
import axios from "axios";
import queryString from "query-string";

//todo: utils에꺼 가져오는걸로 수정
const fetcher = (url: string) =>
  axios.get(url).then((res) => {
    console.log(res);
    return res.data;
  });

const useDetail = () => {
  const questionId = queryString.parse(location.search).id;
  const { data, error, mutate } = useSWR(
    `http://localhost:5000/pages/detail/question?questionId=${questionId}`,
    fetcher
  );

  const thumbPost = (
    userId: number,
    id: number,
    isLike: boolean,
    isQuestion: boolean
  ) => {
    if (data) {
      let likeCount = data.questionInfo.like_count;
      likeCount = isLike ? likeCount + 1 : likeCount - 1;
      if (isQuestion) {
        mutate(
          {
            questionInfo: {
              ...data.questionInfo,
              like_count: likeCount,
              is_like: isLike,
            },
          },
          false
        );

        axios
          .post(
            `http://localhost:5000/posts/question/like`,
            {
              questionUserId: userId,
              questionId: id,
              isLike: isLike,
            },
            {
              withCredentials: true,
            }
          )
          .then(() => {
            mutate();
          })
          .catch((err) => {
            alert(err);
            console.error(err);
            mutate();
          });
      } else {
        const newData = data.questionInfo.answer.map((item: any) => {
          if (item.id === id) {
            item.like_count = likeCount;
            item.is_like = isLike;
          }
          return item;
        });
        mutate(
          {
            questionInfo: {
              ...data.questionInfo,
              answer: newData,
            },
          },
          false
        );
        axios
          .post(
            `http://localhost:5000/posts/answer/like`,
            {
              answerUserId: userId,
              answerId: id,
              isLike: isLike,
            },
            {
              withCredentials: true,
            }
          )
          .then(() => {
            mutate();
          })
          .catch((err) => {
            alert(err);
            console.error(err);
            mutate();
          });
      }
    }
  };

  const CommentPost = (
    text: string,
    questionId?: number,
    answerId?: number
  ) => {
    if (data) {
      /**
       * todo: mutate false로 로컬 데이터 업데이트.
       */
      axios
        .post(
          `http://localhost:5000/posts/comment`,
          {
            text: text,
            questionId: questionId,
            answerId: answerId,
          },
          {
            withCredentials: true,
          }
        )
        .then(() => {
          mutate();
        })
        .catch((err) => {
          alert(err);
          console.error(err);
          mutate();
        });
    }
  };

  return {
    question: data ? data.questionInfo : null,
    answer: data ? data.questionInfo.answer : null,
    isLoading: !error && !data,
    isError: error,
    thumbPost,
    CommentPost,
  };
};
export default useDetail;
