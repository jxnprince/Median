const csurf = require('csurf');
const csrfProtection = csurf({ cookie: true });
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const capitalizeFirstChar = (the_string) => the_string.charAt(0).toUpperCase() + the_string.slice(1);





module.exports = {
    csrfProtection,
    asyncHandler,
    capitalizeFirstChar
};
