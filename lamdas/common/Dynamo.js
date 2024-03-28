const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

const Dynamo = {
    async get(ID, tableName) {
        const params = {
            TableName: tableName,
            Key: {
                ID,
            },
        };

        const data = await documentClient.get(params).promise();

        if (!data || !data.Item) {
            throw Error(`There was an error fetching the data for ID of ${ID} from ${tableName}`);
        }
        console.log(data);

        return data.Item;
    },
    async write(data, tableName){
        if(!data.ID){
            throw Error('no ID in provided data');
        }

        const params = {
            TableName: tableName, 
            Item: data
        }
        const res = await documentClient.put(params).promise();

        // check if res is valid
        if(!res){
            throw Error(`there was an error while inserting the data`)
        }
        console.log(res);

        return data;
    }
};
module.exports = Dynamo;