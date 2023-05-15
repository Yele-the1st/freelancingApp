import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("User has been created.");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return next(createError(404, "User not found"));
    }

    const isCorrect = bcrypt.compareSync(password, user.password);
    if (!isCorrect) return next(createError(400, "Wrong password or username"));

    const token = jwt.sign(
      { id: user.id, isSeller: user.isSeller },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("jwt", token, { httpOnly: true });
    res.status(200).json({ message: "Successfully authenticated", user });
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res, next) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out.");
};

export const refresh = async (req, res) => {
  const expiredToken = req.cookies.jwt || req.headers.authorization.slice(7);

  try {
    const decoded = jwt.verify(expiredToken, jwtSecret, {
      ignoreExpiration: true,
    });
    const user = await User.findById(decoded.sub);

    if (user) {
      const newToken = jwt.sign({ id: user.id }, jwtSecret, {
        expiresIn: "1h",
      });
      res.cookie("jwt", newToken, { httpOnly: true });
      res.json({ message: "Token refreshed" });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
