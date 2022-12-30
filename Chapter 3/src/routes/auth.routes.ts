import { Router } from "express";
import { AuthenticateUserController } from "../modules/account/useCases/authenticateUser/AuthenticateUserController";

const authenticateUserController = new AuthenticateUserController();

const authRoutes = Router();

authRoutes.post("/", authenticateUserController.handle);

export { authRoutes };
