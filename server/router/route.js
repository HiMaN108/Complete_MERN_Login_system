import { Router } from "express";
const router = Router();

//import all controllers

import * as controller from '../controllers/appController.js'
import { registerMail } from "../controllers/mailer.js";
import Auth , {localVariables} from '../middleware/auth.js'


//  POST METHODs/
router.route('/register').post(controller.register);  //register user
router.route('/registerMail').post(registerMail);         //send the mail
router.route('/authenticate').post(controller.verifyUser, (req,res) => res.end());       // autheicate the user
router.route('/login').post(controller.verifyUser,controller.login);          // login the user


// GET methods
router.route('/user/:username').get(controller.getUser) // user eith username
router.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP)    // generate random OTP
router.route('/verifyOTP').get(controller.verifyOTP)     // verify generate OTP
router.route('/createResetSession').get(controller.createResetSession)     // reset all the variables

//PUT methods

router.route('/updateuser').put(Auth , controller.updateUser);  // is use to update the userprofile
router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword);  //use to reset password

export default router;
