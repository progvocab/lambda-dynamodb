const aws = require('aws-sdk');

let dynamodb = new aws.DynamoDB.DocumentClient({region :"us-east-2"});

exports.handler = async (event) => {
    // TODO implement
    
    const resbody = await  getItemFromDB();
    console.log(resbody);
    const response = {
        statusCode: 200,
        body: JSON.stringify(resbody)
    };
    return response;
};


 function getItemFromDB(  ) {
  const params = {
    TableName: "Topic_Details",
    Key: {
     "TOPIC_ID":"2"
    }
  };
return dynamodb
    .get(params)
    .promise()
    .then(res => res.Item)
    .catch(err => err);
}
