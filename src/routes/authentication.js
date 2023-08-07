const express = require('express');
const router = express.Router();
const passport = require('passport');
const { isLoggedIn } = require('../lib/auth');

class AuthController {
  signupForm(req, res) {
    res.render('auth/signup');
  }

  async signup(req, res) {
    // Lógica para el registro de usuarios
    passport.authenticate('local.signup', {
      successRedirect: '/profile',
      failureRedirect: '/signup',
      failureFlash: true,
    })(req, res);
  }

  signinForm(req, res) {
    res.render('auth/signin');
  }

  async signin(req, res) {
    req.check('username', 'Username is Required').notEmpty();
    req.check('password', 'Password is Required').notEmpty();
    const errors = req.validationErrors();
    if (errors.length > 0) {
      req.flash('message', errors[0].msg);
      res.redirect('/signin');
    } else {
      // Lógica para el inicio de sesión
      passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true,
      })(req, res);
    }
  }

  logout(req, res) {
    req.logOut();
    res.redirect('/');
  }

  profile(req, res) {
    res.render('profile');
  }
}

const authController = new AuthController();

router.get('/signup', authController.signupForm);
router.post('/signup', authController.signup);
router.get('/signin', authController.signinForm);
router.post('/signin', authController.signin);
router.get('/logout', authController.logout);
router.get('/profile', isLoggedIn, authController.profile);

module.exports = router;