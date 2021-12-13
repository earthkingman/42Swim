import useSWR from "swr";
import axios from "axios";
import queryString from "query-string";

const fetcher = (url: string) =>
  axios.get(url, { withCredentials: true }).then((res) => {
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
      let likeCount = data.questionInfo.like_count;
      likeCount = isLike ? likeCount - 1 : likeCount + 1;
      const newData = data.questionInfo.answer.map((item: any) => {
        if (item.id === id) {
          item.like_count = likeCount;
          item.is_like = null;
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
        .catch((err) => {
          alert(err);
          console.error(err);
        })
        .finally(() => mutate());
    }
  };

  const CommentEdit = (
    value: string,
    commentId: number,
    quesitonId: number,
    answerId?: number
  ) => {
    if (data) {
      const apiUrl = `${import.meta.env.VITE_API_HOST}/posts/comment`;

      const newData = { ...data };
      if (answerId) {
        newData.questionInfo.answer = newData.questionInfo.answer.map(
          (item) => {
            if (item.id === answerId)
              item.comment = item.comment.map((i) => {
                if (i.id === commentId) i.text = value;
                return i;
              });
            return item;
          }
        );
      } else {
        newData.questionInfo.answer = newData.questionInfo.comment.map((i) => {
          if (i.id === commentId) i.text = value;
          return i;
        });
      }

      mutate(newData, false);
      axios
        .patch(
          apiUrl,
          {
            text: value,
            commentId: commentId,
            questionId: quesitonId,
            answerId: answerId,
          },
          { withCredentials: true }
        )
        .catch((e) => alert(e))
        .finally(() => mutate());
    }
  };

  const CommentDelete = (
    commentId: number,
    questionId: number,
    answerId?: number
  ) => {
    if (data) {
      const apiUrl = `${
        import.meta.env.VITE_API_HOST
      }/posts/comment?commentId=${commentId}&questionId=${questionId}${
        answerId ? `&answerId=${answerId}` : ""
      }`;
      const newData = { ...data };

      if (answerId) {
        newData.questionInfo.answer = newData.questionInfo.answer.map(
          (answer: any) => {
            if (answer.id === answerId)
              answer.comment = answer.comment.filter(
                (com: any) => com.id !== commentId
              );
            return answer;
          }
        );
      } else {
        newData.questionInfo.comment = newData.questionInfo.comment.filter(
          (com) => com.id !== commentId
        );
      }

      mutate(newData, false);
      axios
        .delete(apiUrl, { withCredentials: true })
        .catch((e) => {
          console.error(e);
          alert(e);
        })
        .finally(() => mutate());
    }
  };

  const AnswerPost = (
    questionId: number,
    text: string,
    userName: string,
    setValue: any
  ) => {
    if (data) {
      const newData = { ...data };
      newData.questionInfo.answer.push({
        text: text,
        user: { nickname: userName },
      });
      mutate(newData, false);
      axios
        .post(
          `${import.meta.env.VITE_API_HOST}/posts/answer`,
          {
            questionId: questionId,
            text: text,
          },
          {
            withCredentials: true,
          }
        )
        .then(() => setValue(""))
        .catch((e) => alert(e))
        .finally(() => mutate());
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
      const url = `${import.meta.env.VITE_API_HOST}/posts/answer/choice`;

      mutate(newData, false);
      await axios.post(
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
      mutate();
    } catch (e) {
      alert(e);
      console.error(e);
    }
  };

  return {
    question: data ? data.questionInfo : null,
    answer: data ? data.questionInfo.answer : null,
    isLoading: !error && !data,
    isError: error,
    QuestionThumbPost,
    AnswerThumbPost,
    CommentPost,
    CommentEdit,
    CommentDelete,
    AnswerPost,
    ChoicePost,
  };
};

export default useDetail;
