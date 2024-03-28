const responses = require('../common/api_responses');
// example user data
const userData = {
    110024: { name: 'Manish', age: 31, job: 'IT Software' }, 
    110025: { name: 'Sudhir', age: 25, job: 'IT Management'},
    110058: { name: 'Vishal', age: 39, job: 'Cloud Serveices Management'}
};

exports.handler = async event => {
    console.log('event', event);
    if (!event.pathParameters || !event.pathParameters.ID) {
        //failed without an ID
        return responses._400({ message: 'missing ID from the path' });
    }
    let ID = event.pathParameters.ID;
    if (userData[ID]) {
        //return the userData
        console.log(userData[ID]);
        return responses._200(userData[ID]);
    }
    // failed as ID is not in userData
    return responses._400({ message: 'no ID in userData' });
};