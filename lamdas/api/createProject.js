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

    //create project
    const project = JSON.parse(event.body);
    project.ID = ID

    // write it to DynamoDB
    const newProject = await Dynamo.write(project, tableName).catch(err => {
        console.log('err in write into DynamoDB', err);
        return responses._400({ message: err });
    });

    // if(!newProject){
    //     return responses._400({ message: 'unable to write project information.' });
    // }
    return responses._200({newProject});
}