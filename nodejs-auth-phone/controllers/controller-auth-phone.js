"use strict";
const firebase = require("../firebaseDB");
const firestore = firebase.firestore();
const otpGenerator = require("otp-generator");
const {sendSMS} = require('../send-sms/sms');

module.exports.addPhone = async (req, res, next) => {
  try {
    const id = req.body.number;
    const OTP = otpGenerator.generate(6, {
      digits: true,
      alphabets: false,
      upperCase: false,
      specialChars: false,
    });
    const data = {
      number: req.body.number,
      otp: OTP,
    };
    if(req.body.number.match("[0]{1}[0-9]{9}") ){
    await firestore.collection("login").doc(id).set(data);
    sendSMS(req.body.number, `Your OTP ${OTP}`, 2, '961dde7370b357fa')
    res.status(200).send(`Your OTP ${OTP}`);

    }else{
      res.status(400).send(`Number must 10 digits`);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};


module.exports.verifyPhone = async (req, res) => {
  try {
    const id = req.body.number;
    const deleteOtp = {
      number: req.body.number,
      otp: "",
    };
    const number = await firestore.collection("login").doc(id);
    const data = await number.get();
   
    
    if (data.data().otp === req.body.otp && req.body.otp.match("[0-9]{6}")) {
      number.set(deleteOtp);
      return res.status(200).send("Verify Successfull!",);
    } else {
      return res.status(400).send("Your OTP was wrong!");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};



