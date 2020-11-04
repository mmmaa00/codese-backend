const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { JWT_SECRET_KEY } = process.env;

const SALT_ROUND = 10
const generatePassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, SALT_ROUND)
  console.log(hashedPassword);
  return hashedPassword;
}

const generateToken = ({ username, role }) => {
  const token = jwt.sign(
    { username, role },
    JWT_SECRET_KEY,
    {
      expiresIn: 1000 * 60 * 60 * 24
    }
  );
  return token;
}

const verifyPassword = async (password, hashedPassword) => {
  const result =
    await bcrypt.compare(
      password,
      hashedPassword
    );
  console.log(result ? 'dung' : 'sai');
  return result;
};

const verifyToken = token => {
  const data = jwt.verify(token, JWT_SECRET_KEY);
  return data
}

module.exports = {
  generatePassword,
  verifyPassword,
  generateToken,
  verifyToken
}