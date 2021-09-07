const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
import { User } from '../entity/User';


module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
    }, async (email, password, done) => {
        try {
            const user = await User.findOne({ where: { email } });
            if (user) {
                const result = await bcrypt.compare(password, user.password);
                if (result) {
                    return done(null, user.id);
                } else {
                    return done(null, false, { message: "Password is wrong" })
                }
            }
            else {
                return done(null, false, { message: "This is an unregistered email" })
            }
        }
        catch (error) {
            console.log(error);
            return done(error);
        }
    }))
}