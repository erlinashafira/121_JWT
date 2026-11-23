const express = require("express");
const router = express.Router();

const komikController = require("../controller/KomikController");
const userController = require("../controller/userController");
const authMiddleware = require("../middleware/authMiddleware");

console.log("register:", typeof userController.register);
console.log("login:", typeof userController.login);
console.log("authMiddleware:", typeof authMiddleware);
console.log("createKomik:", typeof komikController.createKomik);
console.log(authMiddleware);

// Route User
router.post("/register", userController.register);
router.post("/login", userController.login);

// Route Komik
router.get("/komik", authMiddleware, komikController.getAllKomik);
router.get("/komik/:id", authMiddleware, komikController.getKomikById);
router.post("/komik", authMiddleware, komikController.createKomik);
router.put("/komik/:id", authMiddleware, komikController.updateKomik);
router.delete("/komik/:id", authMiddleware, komikController.deleteKomik);

module.exports = router;