const aws = require('aws-sdk');

exports.handler = function (event,context , callback )   {


        try{
            aws.config.setPromisesDependency();
            aws.config.update( {
               
                region :"us-east-2"
            }
            );
            let dynamodb = new aws.DynamoDB.DocumentClient();
            let details = {
                TableName : "Topic_Details" ,
                Key : {
                    "TOPIC_ID":"2"
                }
            };
            console.log("before data")
             dynamodb.get(
                details , function(err , data ){
                    console.log(err);
                    console.log(data);
                }
            );
        }catch(e){
            console.log(e);
        }
    }
    


 
