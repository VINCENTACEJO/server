
const express = require("express");

const router = express.Router();

router.get("/home", (req, res) =>{
    res.send("Welcome home USER");
});

router.get("/about", (req, res) =>{
    res.send("Welcome about USER");
});

router.get("/contact", (req, res) =>{
    res.send("Welcome contact USER");
});

router.get("/info", (req, res) =>{
    res.send("Welcome info USER");
});

router.get("/dashboard", (req, res) =>{
    res.send("Welcome dashboard USER");
});

module.exports = router;