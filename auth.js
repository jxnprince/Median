const cookieParser = require("cookie-parser");
const {
    User
} = require("./db/models")

const loginUser = (req, res, user) => {
    req.session.auth = {
        userId: user.id,
        email: user.email
    };
}
const authenticatedUser = (req, res, next) => {
    res.locals.user = req.user
    res.locals.authenticated = !res.user.anonymous
    next()
}


const logoutUser = (req, res) => {
    delete req.session.auth;
    // req.session.destroy(req.sid)
    res.clearCookie('connect.sid')
}

const restoreUser = async (req, res, next) => {

    if (req.session.auth) {
        const { userId } = req.session.auth;

        try {
            const user = await User.findByPk(userId);

            if (user) {
                res.locals.authenticated = true;
                res.locals.user = user;
                next();
            }
        } catch (err) {
            res.locals.authenticated = false;
            next(err);
        }


    } else {
        res.locals.authenticated = false;
        next();
    }

};





module.exports = {
    loginUser,
    logoutUser,
    restoreUser
}
