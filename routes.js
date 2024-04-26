const express = require('express');
const { createAnInvoice, getAnInvoice, listInvoice, updateAnInvoice, deleteInvoice } = require('./invoice-controller');

const router = express.Router();

// create
router.post('/invoice', createAnInvoice)

// read
router.get('/invoice/:id', getAnInvoice)

// list
router.get('/invoice', listInvoice)

// update
router.put('/invoice/:id', updateAnInvoice)

// delete
router.delete('/invoice/:id', deleteInvoice);


module.exports = router;