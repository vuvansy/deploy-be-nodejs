const { uploadSingleFile } = require("../services/fileService");

const { createCustomerService, createArrayCustomerService, 
    getAllCustomerService, putUpdateCustomerService, deleteACustomerService } = require('../services/customerService');

// {key: value, key1: value1}
module.exports = {
    postCreateCustomer: async (req, res) => {
        let { name, address, phone, email, description } = req.body;

        let imageUrl = "";
        // image: String,

        if (!req.files || Object.keys(req.files).length === 0) {
            //do nothing
        } else {
            let result = await uploadSingleFile(req.files.image);
            imageUrl = result.path;
        }

        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            image: imageUrl
        }
        // console.log(customerData);

        let customer = await createCustomerService(customerData);
        return res.status(200).json(
            {
                EC: 0,
                data: customer
            }
        )
    },

    postCreateArrayCustomer: async (req, res) => {
        // console.log(req.body);\
        //req.body.customers data gửi lên
        let customers = await createArrayCustomerService(req.body.customers);
        if (customers) {
            return res.status(200).json(
                {
                    EC: 0,
                    data: customers
                }
            )
        } else {
            return res.status(200).json(
                {
                    EC: -1,
                    data: customers
                }
            )
        }},

        getAllCustomers: async (req, res) => {
            let result = await getAllCustomerService();
            return res.status(200).json(
                {
                    EC: 0,
                    data: result
                }
            )
        },

        putUpdateCustomers: async (req, res) => {
            let { id, name, email, address } = req.body;
            let result = await putUpdateCustomerService(id, name, email, address);
            return res.status(200).json(
                {
                    EC: 0,
                    data: result
                }
            )
        },

        deleteACustomer: async (req, res) => {
            let id = req.body.id;
            let result = await deleteACustomerService(id);
            return res.status(200).json(
                {
                    EC: 0,
                    data: result
                }
            )
        }
}