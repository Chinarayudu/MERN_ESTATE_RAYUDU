import express from "express";

import {
  test,
  updateUserInfo,
  deleteUserInfo,
  getUserListings,
  getUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
const userRouter = express.Router();
userRouter.get("/test", test);
userRouter.post("/update/:id", verifyToken, updateUserInfo);
userRouter.delete("/delete/:id", verifyToken, deleteUserInfo);
userRouter.get("/listings/:id", verifyToken, getUserListings);
userRouter.get("/:id", verifyToken, getUser);

export default userRouter;
