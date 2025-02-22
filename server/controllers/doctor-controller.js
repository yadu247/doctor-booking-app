const Doctor = require('../db/models/doctor-schema');
const Hospital = require('../db/models/hospital-schema');
const Department = require('../db/models/department-schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const genPassword = require('generate-password');
const nodemailer = require('nodemailer');

module.exports.signup = async (req, res) => {
  try {
    let body = req.body;
    const { email } = body;
    const hospital = await Hospital.findOne({ name: body.hospital });
    const department = await Department.findOne({ name: body.department });
    body.hospital = hospital._id;
    body.department = department._id;

    const doctor = await Doctor.findOne({ email: email });
    if (doctor) {
      return res
        .status(400)
        .json({ message: 'Email already exist', error: true });
    }

    const password = genPassword.generate({ length: 10, numbers: true });
    console.log(password);
    const hashedPassword = await bcrypt.hash(password, 2);
    const dbResponse = await Doctor.create({
      ...body,
      password: hashedPassword,
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '10yadukrishnan@gmail.com',
        pass: 'xokj anvk kmcf fynh',
      },
    });

    const mailOptions = {
      from: '10yadukrishnan@gmail.com',
      to: body.email,
      subject: 'EasyDoc Account Password',
      text: `Password for your EasyDoc Doctor's account is ${password}`,
    };

    transporter.sendMail(mailOptions, e => {
      if (e) throw e;
      else
        return res
          .status(201)
          .json({ message: "Password sent to Doctor's email", error: false });
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const doctor = await Doctor.findOne({ email });

    if (!doctor) {
      return res
        .status(403)
        .json({ message: 'Incorrect Email or Password', error: true });
    }

    const isMatching = await bcrypt.compare(password, doctor.password);
    if (!isMatching) {
      return res
        .status(403)
        .json({ message: 'Incorrect Email or Password', error: true });
    }

    const token = jwt.sign(
      { id: doctor._id, role: 'DOCTOR' },
      process.env.SECRET_KEY,
      { expiresIn: '5d' }
    );

    return res
      .status(201)
      .json({ message: 'Doctor logged in succesfully', error: false, token });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.listDoctors = async (req, res) => {
  try {
    const { hos, dep } = req.query;
    if (hos && dep) {
      const doctors = await Doctor.find({ hospital: hos, department: dep });
      return res.status(200).json(doctors);
    } else {
      const doctors = await Doctor.find();
      return res.status(200).json(doctors);
    }
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findById(id);
    return res.status(200).json(doctor);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const doctor = await Doctor.findOne({ email });
    if (!doctor) {
      return res
        .status(403)
        .json({ message: 'No doctor exists with the email id', error: true });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: '10yadukrishnan@gmail.com', pass: 'xokj anvk kmcf fynh' },
    });

    const token = jwt.sign(
      { email: email },
      process.env.RESET_PASSWORD_SECRET_KEY,
      { expiresIn: '5d' }
    );

    const mailOptions = {
      from: '10yadukrishnan@gmail.com',
      to: email,
      subject: 'RESET DOCTOR BOOKING APP PASSWORD',
      text:
        'Reset your doctor password using this link: http://localhost:5173/doctor/forgot-password-reset/' +
        token,
    };

    transporter.sendMail(mailOptions, e => {
      if (e) throw e.message;
      else
        return res
          .status(201)
          .json({ message: 'Doctor Password reset email sent', error: false });
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.resetPassword = async (req, res) => {
  try {
    const { email, password, confirmPassword, token } = req.body;
    const decoded = jwt.verify(token, process.env.RESET_PASSWORD_SECRET_KEY);
    if (password != confirmPassword) {
      return res
        .status(403)
        .json({ message: 'Passwords does not match', error: true });
    }
    const hashedPassword = await bcrypt.hash(password, 2);
    const dbResponse = await Doctor.findOneAndUpdate(
      { email: email },
      { $set: { password: hashedPassword } }
    );
    return res.status(200).json({ message: 'Your Password has been updated' });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};
