import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const deleteUser = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).send("You are not authenticated");

    jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
      res.send(payload);
    });
    // await User.findByIdAndDelete(req.params.id);
  } catch (err) {
    res.status(500).send("something went wrong");
  }
};
