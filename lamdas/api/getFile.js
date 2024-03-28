const responses = require('../common/api_responses');
const s3 = require('../common/S3');
// get table name
const bucketName = process.env.bucketName;

exports.handler = async event => {
    console.log('event', event);
    if (!event.pathParameters || !event.pathParameters.fileName) {
        //failed without a fileName
        return responses._400({ message: 'missing fileName from the path' });
    }
    // get data from s3 file system
    let fileName = event.pathParameters.fileName;

    // write it to s3 file system
    const FileData = await s3.get(fileName, bucketName).catch(err => {
        console.log('err in fetching file name from bucket', err);
        return null;
    });

    if(!FileData){
        return responses._400({ message: 'unable to get file information.' });
    }
    return responses._200({FileData});
}