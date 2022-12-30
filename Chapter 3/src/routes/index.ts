import "reflect-metadata";
import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specifications.routes";
import { usersRoutes } from "./users.routes";
import { authRoutes } from "./auth.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);
router.use("/users", usersRoutes);
router.use("/auth", authRoutes);

export { router };
