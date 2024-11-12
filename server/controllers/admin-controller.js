const Admin = require('../db/models/admin-schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

module.exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email: email });
    if (admin) {
      return res
        .status(400)
        .json({ message: 'Email already exists', error: true });
    }

    const hashedPassword = await bcrypt.hash(password, 2);
    const dbResponse = await Admin.create({ email, password: hashedPassword });

    return res
      .status(201)
      .json({ message: 'Admin added succesfully', error: false });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email: email });

    if (!admin) {
      return res
        .status(403)
        .json({ message: 'Incorrect Email or Password', error: true });
    }
    const isMatching = await bcrypt.compare(password, admin.password);
    if (!isMatching) {
      return res
        .status(403)
        .json({ message: 'Incorrect Email or Password', error: true });
    }

    const token = jwt.sign(
      { id: admin._id, role: 'ADMIN' },
      process.env.SECRET_KEY,
      { expiresIn: '5d' }
    );

    return res
      .status(201)
      .json({ message: 'Admin logged in succesfully', error: false, token });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findOne({ _id: id });
    return res.status(200).json(admin);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res
        .status(403)
        .json({ message: 'No admin exists with the email id', error: true });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: '10yadukrishnan@gmail.com', pass: 'ktsl skhe drtk ijug' },
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
        'Reset your password using this link: http://localhost:5173/admin/forgot-password-reset/' +
        token,
    };

    transporter.sendMail(mailOptions, e => {
      if (e) throw e.message;
      else
        return res
          .status(201)
          .json({ message: 'Admin Password reset email sent', error: false });
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
    const dbResponse = await Admin.findOneAndUpdate(
      { email: email },
      { $set: { password: hashedPassword } }
    );
    return res.status(200).json({ message: 'Your Password has been updated' });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};
