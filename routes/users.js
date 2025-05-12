import express from "express";
var router = express.Router();
import { login } from "../controllers/login.js";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/user/login',login);

export default router;
