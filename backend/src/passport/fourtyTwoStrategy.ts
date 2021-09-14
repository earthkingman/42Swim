import dotenv from "dotenv";
dotenv.config();
import User from "../entity/User";
import passport from "passport";
import Strategy from "passport-42";
const FortyTwoStrategy = Strategy;

export default () => {
  passport.use(
    new FortyTwoStrategy(
      {
        clientID: process.env.FORTYTWO_CLIENT_ID,
        clientSecret: process.env.FORTYTWO_CLIENT_SECRET,
        callbackURL: process.env.RETURN_URL,
      },
      async function (accessToken, refreshToken, profile, done) {
        console.log("요청 들어옴");
        console.log("accessToken", accessToken, "refreshToken", refreshToken);
        console.log("FortyTwoStrategy");
        // console.log(profile.id);
        // console.log(profile.emails[0].value);
        // console.log(profile);
        // console.log(profile.username);
        try {
          const exUser = await User.findOne({
            where: { email: profile.emails[0].value },
          });
          if (exUser) {
            return done(null, exUser);
          } else {
            const newUser = User.create({
              nickname: profile.username,
              email: profile.emails[0].value,
              password: process.env.PASSWORD,
            });
            await newUser.save();
            return done(null, newUser);
          }
        } catch (error) {
          console.log(error);
          return done(error);
        }
        // callback함수를 실행하면 두 번째 인자로 넣은 정보를 serializeUser 미들웨어로 전달한다.
      }
    )
  );
};
