import { Question } from "../entity/question";
import { Answer } from "../entity/answer"

export interface AnswerDetail extends Answer {
    is_like: boolean
}

export interface QuestionDetail extends Question {
    is_like: boolean,
    answer: AnswerDetail[],
}

