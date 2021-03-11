const {
  csrfProtection,
  asyncHandler,
  createUserValidators,
  loginValidators,
  updateUserValidators
} = require('../utils.js');
const {
  User,
  Story
} = require('../db/models');
const {
  loginUser,
  logoutUser
} = require('../auth.js');
const {
  Model
} = require('sequelize');
const {
  validationResult
} = require('express-validator');
const express = require('express');
const bcrypt = require('bcryptjs')
const sequelize = require('sequelize');
const router = express.Router();
const Op = sequelize.Op;

// GET localhost:8080/users/ ||works
router.get('/', csrfProtection, asyncHandler(async (req, res) => {
  if (req.session.auth) res.redirect("/feed");
  else res.render("splash", {
    csrfToken: req.csrfToken(),
    title: ""
  });
}));

router.get('/login', csrfProtection, asyncHandler(async (req, res) => {
  if (req.session.auth) res.redirect("/feed");
  res.render('loginForm', {csrfToken: req.csrfProtection()})
}))

//DO NOT TOUCH THIS ROUTE!!!!
router.post('/signup', createUserValidators, asyncHandler(async (req, res) => {
  const {
    email,
    firstName,
    lastName,
    password,
    gender,
    avatar
  } = req.body
  const validationErrors = validationResult(res)

  if (validationErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
      email,
      firstName,
      lastName,
      hashedPassword,
      gender,
      avatar
    })
    loginUser(req, res, user)
    req.session.save(() => {
      if (req.session) res.redirect("/feed")
      else next(res.err)
    })
    console.log(`You hit the user registration route`)
  } else {
    console.log(`You hit the user registration error route`)
    const errors = validationErrors.array().map((error) => error.msg);
    res.render('error', {
      user,
      errors,
      csrfToken: req.csrfToken()
    })
  }
}))

// POST localhost:8080/users/login || working
router.post('/login', loginValidators, asyncHandler(async (req, res) => {
  let user = {
    email,
    password
  } = req.body
  const validationErrors = validationResult(res)

  if (validationErrors.isEmpty()) {
    const dbEmail = await User.findOne({
      where: {
        email: email
      }
    })

    console.log('(================================)')
    if (dbEmail) {
      const match = await bcrypt.compare(password, dbEmail.hashedPassword.toString())
      console.log('<================================>')

      if (match) {
        user = dbEmail
        loginUser(req, res, user)
        req.session.save(() => {
          if (req.session) res.redirect("/feed")
          else next(res.err)
        })
      }
    }
  } else {
    const errors = validationErrors.array().map((error) => error.msg);
    res.render('error', {
      user,
      errors,
      csrfToken: req.csrfToken()
    })
  }
}))

// POST localhost:8080/users/logout || working
router.post('/logout', (req, res) => {
  logoutUser(req, res)
  res.redirect('/')
})

router.post('/demo-user', asyncHandler(async (req, res, next) => {
  const user = await User.findOne({
    where: {
      email: 'test@test.net'
    }
  });
  loginUser(req, res, user);
  return req.session.save(() => {
    //Not logging user in.  Redirecting to wrong place???
    if (req.session) res.redirect("/feed")
    else next(res.error)
  })
}));



// change this


// GET localhost:8080/users/profile/:id
router.get('/profile/:id(\\d+)', asyncHandler(async (req, res) => {
  // const id = req.params.id
  // const user = await User.findByPk(id)
  // const userStories = await Story.findAll({
  //   where: {
  //     userId: id
  //   }
  // })
  // let followees = await User.findByPk(id, {
  //   include: [{
  //     model: User,
  //     as: "Followees",
  //     attributes: ["firstName", "lastName", "id"]
  //   }]
  // })
  // // followees.Followees[0].Follow.followerId
  // followees = followees.Followees.map((followed) => followed.Follow.followerId)
  // const followeeStories = await Story.findAll({
  //   where: {
  //     userId: {
  //       [Op.in]: followees
  //     }
  //   }
  // })
  res.render("userProfile" /*, {
    user,
    userStories,
    followeeStories,
    title: `${user.firstName}'s profile`
  }*/ );

}));




router.get('/profile/:id(\\d+)/editUser', csrfProtection, asyncHandler(async (req, res) => {
  const user = await findByPk(req.params.id)
  const {
    email,
    firstName,
    lastName,
    gender,
    birthdate,
    avatar
  } = user;
  res.render('editUserForm', {
    email,
    firstName,
    lastName,
    gender,
    birthdate,
    avatar,
    title: 'edit profile'
  })
}))

// // // PUT localhost:8080/users/profile/:id || not working because no id to reference?
router.post('/profile/:id(\\d+)', updateUserValidators, asyncHandler(async (req, res) => {
  const {
    email,
    firstName,
    lastName,
    gender,
    birthdate,
    avatar
  } = req.body;
  const validationErrors = validationResult(res)
  if (validationErrors.isEmpty()) {
    const user = await findByPk(req.params.id)
    user.update({
      email,
      firstName,
      lastName,
      gender,
      birthdate,
      avatar
    })
    if (req.session) res.redirect("/profile/:id(\\d+)")
    else next(res.err)
  } else {
    const errors = validationErrors.array().map((error) => error.msg);
    res.render('error', {
      user,
      errors,
      csrfToken: req.csrfToken()
    })
  }
}))

// DELETE localhost:8080/users/profile/:id || not working because no id to reference?
router.delete('/profile/:id(\\d+)', asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.params.id)
  await user.destroy()
  res.redirect('/')
}))

module.exports = router;
