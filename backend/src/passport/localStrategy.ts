import passport from "passport";
import Strategy from "passport-local";
const LocalStrategy = Strategy;
import bcrypt from "bcrypt";
import User from "../entity/User";

import { getUserRepository } from "../repository/service";

export default () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const userRepository = await getUserRepository();
          const user = await userRepository.findByEmail(email);
          if (user) {
            const result = await bcrypt.compare(password, user.password);
            if (result) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Password is wrong" });
            }
          } else {
            return done(null, false, {
              message: "This is an unregistered email",
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
