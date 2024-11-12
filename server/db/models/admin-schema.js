const { Schema, model } = require('mongoose');

const adminSchema = Schema(
  {
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    image: {
      type: String,
      default: 'http://localhost:8888/img/default-admin-img.png',
    },
    role: { type: String, default: 'ADMIN' },
  },
  { timestamps: true }
);

const Admin = model('admins', adminSchema);

module.exports = Admin;
