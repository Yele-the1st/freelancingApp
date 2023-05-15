import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!req.user._id.equals(user._id)) {
      return next(createError(403, "You can delete only your account"));
    }
    await user.deleteOne();
    res.status(200).send("deleted");
  } catch (err) {
    next(err);
  }
};
