import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const register = async (req, resp) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("please provide all values");
  }
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email is already exist");
  }
  const user = await User.create({ name, email, password });
  resp.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, resp) => {
  resp.send("Login user");
};
const updateUser = async (req, resp) => {
  resp.send("update User");
  User.findOneAndUpdate;
};

export { register, login, updateUser };
