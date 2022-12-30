import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "../modules/account/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/account/useCases/updateUserAvatar/UpdateUserAvatarController";
import uploadConfig from "../config/upload";
import { ensureAutenticated } from "../middlewares/ensureAuthenticated";

const createUserController = new CreateUserController();

const updateUserAvatarController = new UpdateUserAvatarController();

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
  "/avatar",
  ensureAutenticated,
  uploadAvatar.single("file"),
  updateUserAvatarController.handle
);

export { usersRoutes };
