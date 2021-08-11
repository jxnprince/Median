const the_JWT = require('jsonwebtoken');
const { jwtConfig } = require('./config');
const { User } = require('./db/models');

const { secret, expiresIn } = jwtConfig;


// Sends a JWT Cookie
const setTokenCookie = (response, user) => {
  // construct the user data for the token
  const user_data = { data: user.toSafeObject() };

  // construct the expiration data for the token
  const token_expiration = { expiresIn: parseInt(expiresIn) };

  // Create the token.
  const token = the_JWT.sign(user_data, secret, token_expiration);

  const isProduction = process.env.NODE_ENV === "production";

  // Set the token cookie
  response.cookie('token', token, {
    maxAge: expiresIn * 1000,
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction && "Lax"
  });

  return token;
};



const restoreUser = (request, response, next) => {
  // token parsed from cookies
  const { token } = request.cookies;

  return the_JWT.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      return next();
    }

    try {
      const { id } = jwtPayload.data;
      request.user = await User.scope('currentUser').findByPk(id);
    } catch (e) {
      response.clearCookie('token');
      return next();
    }

    if (!request.user) response.clearCookie('token');

    return next();
  });
};



// If there is no current user, return an error
const requireAuth = [
  restoreUser,
  (request, response, next) => {
    if (request.user) return next();

    const err = new Error('Unauthorized');
    err.title = 'Unauthorized';
    err.errors = ['Unauthorized'];
    err.status = 401;
    return next(err);
  },
];





module.exports = {
  setTokenCookie,
  restoreUser,
  requireAuth
};
