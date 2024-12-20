const userModel = require("../models/UserModels");
const { uploadSingleFile,  uploadMultipleFiles } = require("../services/fileService");

const getUsersAPI = async (req, res) => {
    let results = await userModel.find({});
    return res.status(200).json(
        {
            errorCode: 0,
            data: results
        }
    )
}
const getUsersById = async (req, res) => {
    const { id } = req.params;
    let results = await userModel.findById({_id: id});
    return res.status(200).json(
        {
            errorCode: 0,
            data: results
        }
    )
}

const postCreateUserAPI = async (req, res) => {
    const {fullname} = req.body

    let user = await userModel.create({
       fullname
    })
    return res.status(200).json(
        {
            error: 0,
            data: user
        }
    )
}

const putUpdateUserAPI = async (req, res) => {
const {fullname , userId} = req.body
    let user = await userModel.updateOne({ _id: userId }, { fullname: fullname });
    return res.status(200).json(
        {
            EC: 0,
            data: user
        }
    )
}

const deleteUserAPI = async (req, res) => {
    const id = req.body.userId;
    let result = await userModel.deleteOne({
        _id: id
    })
    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

const postUploadSingleFileApi = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    let result = await uploadSingleFile(req.files.image);
    // console.log(">>> check result: ", result)
    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

const postUploadMultipleFilesAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    // console.log(req.files);
    //upload single => files is an object
    //upload multiple => files is an array
    if (Array.isArray(req.files.image)) {
        //upload multiple
        let result = await uploadMultipleFiles(req.files.image);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    } else {
        //upload single
        return await postUploadSingleFileApi(req, res);
    }
}

module.exports = {
    getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, getUsersById, postUploadSingleFileApi, postUploadMultipleFilesAPI
}