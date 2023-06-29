
const express = require('express')

const getAllInquaries = require("../controllers/InquaryController");
const postInquary = require("../controllers/InquaryReplyController");
const deleteInq = require('../controllers/InquaryDeleteController');

// const TransactionModel = require('../models/TransactionModel')

const router = express.Router();


router.get("/view",getAllInquaries)
router.post("/post",postInquary)
router.delete("/delete",deleteInq)


module.exports = router;