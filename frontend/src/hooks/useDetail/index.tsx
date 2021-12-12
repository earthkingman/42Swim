import useSWR from "swr";
import axios from "axios";
import queryString from "query-string";

const fetcher = (url: string) =>
  axios.get(url, { withCredentials: true }).then((res) => {
    console.log(res);
    return res.data;
  });

const useDetail = () => {
  const questionId = queryString.parse(location.search).id;
  const { data, error, mutate } = useSWR(
    `${
      import.meta.env.VITE_API_HOST
    }/pages/detail/question?questionId=${questionId}`,
    fetcher
  );

  const QuestionThumbPost = (
    userId: number,
    id: number,
    isLike: boolean,
    isDel: boolean
  ) => {
    if (data) {
      if (isDel) {
        let likeCount = data.questionInfo.like_count;
        likeCount = isLike ? likeCount - 1 : likeCount + 1;
        mutate(
          {
            questionInfo: {
              ...data.questionInfo,
              like_count: likeCount,
              is_like: null,
            },
          },
          false
        );
        axios
          .delete(
            `${
              import.meta.env.VITE_API_HOST
            }/posts/question/like?questionId=${id}&questionUserId=${userId}&isLike=${isLike}`,
            {
              withCredentials: true,
            }
          )
          .catch((err) => {
            alert(err);
            console.error(err);
          })
          .finally(() => mutate());
      } else {
        let likeCount = data.questionInfo.like_count;
        likeCount = isLike ? likeCount + 1 : likeCount - 1;
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
            `${import.meta.env.VITE_API_HOST}/posts/question/like`,
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
      }
    }
  };

  const AnswerThumbPost = (
    userId: number,
    id: number,
    isLike: boolean,
    isDel: boolean
  ) => {
    if (isDel) {
      axios
        .delete(
          `${
            import.meta.env.VITE_API_HOST
          }/posts/answer/like?answerId=${id}&answerUserId=${userId}&isLike=${isLike}`,
          {
            withCredentials: true,
          }
        )
        .then(() => mutate())
        .catch((err) => {
          alert(err);
          console.error(err);
          mutate();
        });
    } else {
      let likeCount = data.questionInfo.like_count;
      likeCount = isLike ? likeCount + 1 : likeCount - 1;
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
          `${import.meta.env.VITE_API_HOST}/posts/answer/like`,
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
          `${import.meta.env.VITE_API_HOST}/posts/comment`,
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

  const AnswerPost = async (
    questionId: number,
    text: string,
    userName: string,
    setValue: any
  ) => {
    try {
      if (data) {
        const newData = { ...data };
        newData.questionInfo.answer.push({
          text: text,
          user: { nickname: userName },
        });
        mutate(newData, false);
        const res = await axios.post(
          `${import.meta.env.VITE_API_HOST}/posts/answer`,
          {
            questionId: questionId,
            text: text,
          },
          {
            withCredentials: true,
          }
        );
        mutate();
        setValue("");
        console.log(res);
      }
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  const ChoicePost = async (
    questionId: number,
    answerId: number,
    answerUserId: number
  ) => {
    try {
      const newData = { ...data };
      newData.is_solved = true;
      newData.questionInfo.answer = newData.questionInfo.answer.map((item) => {
        if (item.id === answerId) item.is_solved = true;
        return item;
      });
      mutate(newData, false);
      const url = `${import.meta.env.VITE_API_HOST}/posts/answer/choice`;
      const res = await axios.post(
        url,
        {
          questionId: questionId,
          answerId: answerId,
          answerUserId: answerUserId,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      mutate();
    } catch (e) {
      alert(e);
      console.error(e);
    }
    console.log("choose", questionId, answerId, answerUserId);
  };

  return {
    question: data ? data.questionInfo : null,
    answer: data ? data.questionInfo.answer : null,
    isLoading: !error && !data,
    isError: error,
    QuestionThumbPost,
    AnswerThumbPost,
    CommentPost,
    AnswerPost,
    ChoicePost,
  };
};

export default useDetail;
