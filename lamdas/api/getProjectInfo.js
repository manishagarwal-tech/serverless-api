const responses = require('../common/api_responses');
const Dynamo = require('../common/Dynamo');
// get table name
const tableName = process.env.tableName;


exports.handler = async event => {
    console.log('event', event);
    if (!event.pathParameters || !event.pathParameters.ID) {
        //failed without an ID
        return responses._400({ message: 'missing ID from the path' });
    }

    // get data from DynomoDB
    let ID = event.pathParameters.ID;

    const project = await Dynamo.get(ID, tableName).catch(err => {
        console.log("Error while getting the data from DynamoDB: "+err);
        return null;
    });

    if(!project){
        return responses._400({ message: 'unable to get project information.' });
    }
    return responses._200({project});
}