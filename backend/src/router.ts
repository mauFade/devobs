import { Router } from "express";

import auth from "./services/authentication";

import AuthUserController from "./controllers/AuthUserController";
import AuthCompanyController from "./controllers/AuthCompanyController";
import UserController from "./controllers/UserController";
import CompanyController from "./controllers/CompanyController";
import VacancyController from "./controllers/VacancyController";

const router = Router();

router.post("/api/v1/login", AuthUserController.create);
router.post("/api/v1/login/company", AuthCompanyController.create);

router.post("/api/v1/user", UserController.create);
router.get("/api/v1/user", auth.verifyJWT, UserController.read);

router.post("/api/v1/company", auth.verifyJWT, CompanyController.create);
router.get("/api/v1/company", auth.verifyJWT, CompanyController.read);

router.post("/api/v1/vacancy", auth.verifyJWT, VacancyController.create);
router.get("/api/v1/vacancy", auth.verifyJWT, VacancyController.read);

export default router;
