### How to run

cd ASSESSMENT

please run an instance of mongodb server on your machine locally

npm install
npm start


## POST http://localhost:8080/invoice
create an invoice

example payload:
{
  "invoiceHeader": {
    "customerName": "John Doe",
    "billingAddress": "New York",
    "shippingAddress": "Miami",
    "GSTIN": "GS1122"
  },
  "invoiceItems": [{
    "id": "I1",
    "itemName": "Spoon",
    "price": 10,
    "quantity": 10,
    "amount": 100
  }],
  "invoiceBillSundry": [{
    "id": "BS1",
    "billSundryName": "sundry",
    "amount": 10
  }]
}

## GET http://localhost:8080/invoice
lists all the invoices

## GET http://localhost:8080/invoice/:invoiceId

Get an invoice by ID

## PUT http://localhost:8080/invoice/:invoiceId
Update an invoice by ID

## DELETE http://localhost:8080/invoice/:id
Delete an invoice by ID




Create an Invoice CRUD Endpoints. The structure of tables in the application is as follows:

Invoice Header
Id: UUID
Date: string (UTC)
InvoiceNumber: number
CustomerName: string
BillingAddress: string
ShippingAddress: string
GSTIN: string
TotalAmount: Decimal

Invoice Items
Id: UUID
itemName: string
Quantity: decimal
Price: decimal
Amount: decimal

Invoice BillSundry
Id: UUID
billSundryName: string
Amount: decimal

Create a CRUD endpoint for an invoice. It must follow the following rules:
Build 5 endpoints, create, update, delete, retrieve & list. Follow the REST principles.
Each endpoint must accept the entire Invoice in one JSON during CRUD operation. That is, Each Invoice can have many InvoiceItems and InvoiceBillSundrys.

Validations for InvoiceItems:
Amount = Quantity x Price

Price, Quantity, and Amount must be greater than zero.

Validations for BillSundrys:
The amount can be negative or positive.

Validations for Invoice:
TotalAmount = Sum(InvoiceItems’s Amount) + Sum(InvoiceBillSundry’s Amount)
InvoiceNumber should autoincremental and hence should be unique.
Raise appropriate error messages if any validation fails.
