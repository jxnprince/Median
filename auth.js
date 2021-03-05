

const { User } = require("./db/models")

const loginUser = (req, res, user) => {
    // change name to email???? below--
    req.session.auth = { userId: user.id, name: user.firstName };
}


const logoutUser = (req, res) => {
    delete req.session.auth;
}

const restoreUser = async (req, res, next) => {

    if (req.session.auth) {
        const { userId, username } = req.session.auth;

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


module.exports = { loginUser, logoutUser, restoreUser }
