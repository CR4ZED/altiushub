const InvoiceHeaderModel = require("./models/InvoiceHeader");
const uuid = require('uuid')


const createAnInvoice = async (req, res) => {

  try {
/*
    {
        invoiceHeader: {

        },
        invoiceItems: [{

        }],
        invoiceBillSundry: [{

        }]
    }

*/

    const { invoiceHeader, invoiceItems, invoiceBillSundry } = req.body;
    const { customerName, billingAddress, shippingAddress, GSTIN } = invoiceHeader;

    let totalPrice = 0
    invoiceItems.forEach(item => {
        if(item.price <= 0 || item.quantity <= 0 || item.ammount <= 0) throw new Error(`Invalid invoice item`)
        if (item.amount !== item.quantity * item.price) throw new Error(`Invalid invoice item`)
        totalPrice += (item.quantity * item.price)
    })

    let totalBillSundryAmount = 0;
    invoiceBillSundry.forEach(item => {
        totalBillSundryAmount += item.amount
    })

    const totalAmmount = totalPrice + totalBillSundryAmount;

    // save it in the database InvoiceHeader

    const invoice = new InvoiceHeaderModel({
        InvoiceNumber: uuid.v4(),
        CustomerName: customerName,
        BillingAddress: billingAddress,
        ShippingAddress: shippingAddress,
        GSTIN,
        TotalAmount: totalAmmount
    })
    const result = await invoice.save();

    res.send({
        success: true,
        data: result,
      });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const getAnInvoice = async (req, res) => {
  const { id } = req.params;
  try {
    const invoice = await InvoiceHeaderModel.findById(id)
    res.send({
        success: true,
        data: invoice,
      });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const listInvoice = async (req, res) => {
  try {
    const invoices = await InvoiceHeaderModel.find();

    res.send({
        success: true,
        data: invoices,
      });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const updateAnInvoice = async (req, res) => {
  const { id } = req.params;
  const updatedDoc = req.body;
  try {
    const updated = await InvoiceHeaderModel.findByIdAndUpdate(id, updatedDoc)
    res.send({
        success: true,
        data: updated,
      });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const deleteInvoice = async (req, res) => {
  const { id } = req.params;
  await InvoiceHeaderModel.findByIdAndDelete(id);
  res.send({
    success: true,
  });
  try {
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createAnInvoice,
  getAnInvoice,
  listInvoice,
  updateAnInvoice,
  deleteInvoice,
};
