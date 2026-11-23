import { Router } from "express";
import sessionRouter from "./session.mjs";
import ticketsRouter from "./tickets.mjs";

const router = Router();

router.use(sessionRouter);
router.use(ticketsRouter);

export default router;