import express from "express";
import globalController from "../controller/globalController";

const globalRouter = express.Router();

globalRouter.get("/", globalController.homeController);
globalRouter.get("/Tools", globalController.ToolsController);

export default globalRouter;