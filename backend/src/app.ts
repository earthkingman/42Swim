import express from "express";
const app: express.Application = express();

// get
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("hello express");
});

app.get("/posts", (req: express.Request, res: express.Response) => {
  res.json([
    { id: 1, content: "hello" },
    { id: 2, content: "hello2" },
    { id: 3, content: "hello3" },
  ]);
});

// Express Router 적용하기
// app.use('/post', postRouter);

// 3010 포트로 서버 실행
app.listen(3010, () => {
  console.log("실행중");
});
