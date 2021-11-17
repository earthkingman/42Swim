import passport from "passport";
import passportLocal from "passport-local";
const LocalStrategy = passportLocal.Strategy;
import bcrypt from "bcrypt";

import { UserService } from "../service/user_service";

export default () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const userService: UserService = new UserService();
          const user = await userService.findUserByEmail(email);
          if (user) {
            const result = await bcrypt.compare(password, user.password);
            if (result) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Password Invalid" });
            }
          } else {
            return done(null, false, {
              message: "Email Invalid",
            });
          }
        } catch (error) {
          console.log(error);
          return done(error);
        }
      }
    )
  );
};
