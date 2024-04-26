const mongoose = require('mongoose')

const invoiceHeaderSchema = new mongoose.Schema({
    Date: {
        type: Date, 
        default: new Date().toUTCString()
    },
    InvoiceNumber: String,
    CustomerName: String,
    BillingAddress: String,
    ShippingAddress: String,
    GSTIN: String,
    TotalAmount: Number
})


const InvoiceHeaderModel = mongoose.model('InvoiceHeader', invoiceHeaderSchema)

module.exports = InvoiceHeaderModel