import express from "express";
import { deleteUser } from "../controllers/user.controller.js";
import { authErrorHandler, isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.delete("/delete/:id", isAuthenticated, deleteUser);

export default router;
