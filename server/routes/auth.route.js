import express from "express";
import { register, login, refresh } from "../controllers/auth.contoller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.post("/refresh", refresh);
// You should call the refresh route whenever the user's JWT is about to expire or has expired. Typically, you would call the refresh route from the client-side code before the token expiration time.
// For example, you can set a timer in the client-side code to call the refresh route a few minutes before the token expiration time. Alternatively, you can call the refresh route whenever the client-side code detects an unauthorized access error (e.g., HTTP 401 Unauthorized) due to an expired token.
// In both cases, the refresh route should return a new JWT with a new expiration time, which the client-side code should use for subsequent API calls. Note that the refresh route should only return a new JWT if the old JWT is valid and corresponds to an authenticated user. Otherwise, the refresh route should return an error (e.g., HTTP 401 Unauthorized).

// router.post("/logout", logout);

export default router;
