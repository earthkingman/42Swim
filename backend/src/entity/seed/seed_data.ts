import bcrypt from "bcrypt";
// import dotenv from "dotenv";

import { QuestionService } from '../../service/question_service';
import { UserService } from '../../service/user_service';
import { AnswerService } from '../../service/answer_service';
import { CommentService } from '../../service/comment_service';
import { LikeService } from '../../service/like_service';

export const insertSeed = async () => {

    for (let i = 1; i <= 20; i++) {
        const userService: UserService = new UserService();
        await userService.createUser({ email: 'tester' + String(i) + '@gmail.com', nickname: "tester" + String(i), password: await bcrypt.hashSync("tester" + String(i), +process.env.SALT_ROUNDS), photo: "" });
    }
    console.log("유저 생성 완료")

    for (let i = 1; i <= 10; i++) {
        const questionService: QuestionService = new QuestionService();
        await questionService.post({ email: 'tester' + String(i) + '@gmail.com', title: "tester" + String(i) + "'s question", text: "question text question text question text", userId: i, hashtag: ["ft_printf", "ft_containers","ft_island"]});
    }
    for (let i = 11; i <= 20; i++) {
        const questionService: QuestionService = new QuestionService();
        await questionService.post({ email: 'tester' + String(i) + '@gmail.com', title: "tester" + String(i) + "'s question", text: "question text question text question text", userId: i, hashtag: ["ft_printf", "gnl" ,"born2beroot"] });
    }
    console.log("질문 생성 완료")


    for (let i = 1; i <= 20; i++) {
        const answerService: AnswerService = new AnswerService();
        await answerService.post({ email: 'tester' + String(i) + '@gmail.com', text: "ansewr answer answer answer" + String(i), userId: i, questionId: 1 });
    }
    console.log("답변 생성 완료")


    for (let i = 1; i <= 10; i++) {
        const commentService: CommentService = new CommentService();
        await commentService.post({ userId: i, questionId: 1, text: "comment " + String(i) });
    }

    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 5; j++) {
            const commentService: CommentService = new CommentService();
            await commentService.post({ userId: j, questionId: 1, answerId: i, text: "comment " + String(j) });
        }
    }

    console.log("댓글 생성 완료")

    for (let i = 1; i <= 10; i++) {
        const likeService: LikeService = new LikeService();
        await likeService.createQuestionLike({ userId: i, questionId: 1, isLike: true, questionUserId: 1 });
    }

    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 5; j++) {
            let flag = true;
            if ((i + j) % 2 === 0) {
                flag = false;
            }
            const likeService: LikeService = new LikeService();
            await likeService.createAnswerLike({ userId: j, answerId: i, isLike: flag, answerUserId: i });
        }
    }
    console.log("좋아요 생성 완료");

    console.log("시드데이터 삽입 완료");
}
export const insertSeed10000 = async () => {

    for (let i = 1; i <= 10000; i++) {
        const userService: UserService = new UserService();
        await userService.createUser({ email: 'tester' + String(i) + '@gmail.com', nickname: "tester" + String(i), password: await bcrypt.hashSync("tester" + String(i), +process.env.SALT_ROUNDS), photo: "" });
    }
    console.log("유저 생성 완료")

    for (let i = 1; i <= 10000; i++) {
        const questionService: QuestionService = new QuestionService();
        await questionService.post({ email: 'tester' + String(i) + '@gmail.com', title: "tester" + String(i) + "'s question", text: "question text question text question text", userId: i, hashtag: ["ft_printf", "ft_containers","ft_island"]});
    }
    for (let i = 1; i <= 10000; i++) {
        const questionService: QuestionService = new QuestionService();
        await questionService.post({ email: 'tester' + String(i) + '@gmail.com', title: "tester" + String(i) + "'s question", text: "question text question text question text", userId: i, hashtag: ["ft_printf", "gnl" ,"born2beroot"] });
    }
    console.log("질문 생성 완료")

    for (let j = 0; j < 10; j++){
    for (let i = 1; i <= 1000; i++) {
        const answerService: AnswerService = new AnswerService();
        await answerService.post({ email: 'tester' + String(i) + '@gmail.com', text: "ansewr answer answer answer" + String(i), userId: i, questionId: i });
    }
}
    console.log("답변 생성 완료")

    for (let j = 0; j < 5; j++){

    for (let i = 1; i <= 10000; i++) {
        const commentService: CommentService = new CommentService();
        await commentService.post({ userId: i, questionId: i, text: "comment " + String(i) });
    }
    }

    for (let i = 0; i < 10; i++) {
        for (let j = 1; j <= 1000; j++) {
            const commentService: CommentService = new CommentService();
            await commentService.post({ userId: j, questionId: j, answerId: j+i*1000, text: "comment " + String(j) });
        }
    }

    console.log("댓글 생성 완료")
    for (let j = 0; j < 5; j++){

        for (let i = 1; i <= 9000; i++) {

        const likeService: LikeService = new LikeService();
        await likeService.createQuestionLike({ userId: i+j, questionId: i, isLike: true, questionUserId: i });
        }
        }
    
        for (let i = 0; i < 10; i++) {
            for (let j = 1; j <= 1000; j++) {

            const likeService: LikeService = new LikeService();
            await likeService.createAnswerLike({ userId: j+i, answerId: j+i*1000, isLike: true, answerUserId: j });
            }
        }

   
    console.log("좋아요 생성 완료");

    console.log("시드데이터 삽입 완료");
}

export const insertSeed1000 = async () => {

    for (let i = 1; i <= 2000; i++) {
        const questionService: QuestionService = new QuestionService();
        await questionService.post({ email: 'tester' + String(i) + '@gmail.com', title: "tester" + String(i) + "'s question", text: "question text question text question text", userId: 1, hashtag: ["ft_printf", "ft_containers","ft_island"]});
    }
    console.log("질문 생성 완료")

    for (let i = 1; i <= 2000; i++) {
        const answerService: AnswerService = new AnswerService();
        await answerService.post({ email: 'tester' + String(i) + '@gmail.com', text: "ansewr answer answer answer" + String(i), userId: 1, questionId: 1 });
    }

    console.log("답변 생성 완료")

    for (let j = 0; j < 5; j++){

    for (let i = 1; i <= 2000; i++) {
        const commentService: CommentService = new CommentService();
        await commentService.post({ userId: 1, questionId: 1, text: "comment " + String(i) });
    }
    }

    console.log("댓글 생성 완료")
    console.log("시드데이터 삽입 완료");
}

