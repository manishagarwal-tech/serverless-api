const responses = require('../common/api_responses');
const s3 = require('../common/S3');
// get bucket name
const bucketName = process.env.bucketName;

exports.handler = async event => {
    console.log('event', event);
    if (!event.pathParameters || !event.pathParameters.fileName) {
        //failed without a fileName
        return responses._400({ message: 'missing ID from the path' });
    }

    // get data from s3 file system
    let fileName = event.pathParameters.fileName;

    //create file
    const data = JSON.parse(event.body);

    // write it to s3 file system
    const newData = await s3.write(data, fileName, bucketName).catch(err => {
        console.log('err in write into s3 bucket', err);
        return null;
    });

    if(!newData){
        return responses._400({ message: 'unable to write file at bucket.' });
    }
    return responses._200({newData});
}