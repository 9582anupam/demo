import express from "express";
import usersRoutes from "./users.routes.js";
// import ordersRoutes from "./orders.routes.js"; // Example for orders routes

const router = express.Router();

// Attach specific routes for version 1
router.use("/users", usersRoutes);
router.use("/", (req, res) => {
    res.send("API Running");
})

export default router;
