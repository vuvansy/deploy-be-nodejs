const uploadSingleFile = async (fileObject) => {
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let uploadPath = './public/uploads/' + fileObject.name; //Thay đổi nơi lưu trữ ảnh
    // Use the mv() method to place the file somewhere on your server

    // save => public/images/upload //upload tại 

    // abc.png => abc-timestamp.png //Sửa tên ảnh
    // upload multiple files

    // console.log(">>> Check __dirname: ", __dirname);
    // console.log(">>> Check uploadPath: ", uploadPath);
    try {
        await fileObject.mv(uploadPath);
        return {
            status: 'success',
            path: 'link-image',
            error: null
        }
    } catch (err) {
        console.log(">>> check error: ", err)
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(err)
        }
    }
}
const uploadMultipleFiles = () => {
}

module.exports = {
    uploadSingleFile, uploadMultipleFiles
}