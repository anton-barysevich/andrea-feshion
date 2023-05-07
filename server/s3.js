import fs from 'fs';
import S3 from 'aws-sdk/clients/s3.js';


//TODO: Put your personal data to this config
const bucketName = ""
const region = ""
const accessKeyId = ""
const secretAccessKey = ""

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})

// uploads a file to s3
export function uploadFile(file) {
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    }

    return s3.upload(uploadParams).promise()
}

// downloads a file from s3
export function getFileStream(fileKey) {
    const downloadParams = {
        Key: fileKey,
        Bucket: bucketName
    }

    return s3.getObject(downloadParams).createReadStream()
}

// const saveMethod = async (file) => {
//     const result =  uploadFile(file)
//     return result;
// }