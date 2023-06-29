const express = require('express')

const getAllTransaction = require("../controllers/TransactionController");
const updateProduct = require("../controllers/TransactionUpdateContoller");
const deleteProduct = require("../controllers/TransactonDeleteController");
// const TransactionModel = require('../models/TransactionModel')



const router = express.Router();


router.get("/view",getAllTransaction)

router.put("/update",updateProduct)

router.delete("/delete", deleteProduct)


module.exports = router;