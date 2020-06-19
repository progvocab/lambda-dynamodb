

Command to call the lambda from CLI  
---------------------------------------------

WINDOWS :

aws lambda invoke --function-name apigetddb out --log-type Tail ^
--query 'LogResult' --output text |  base64 -d

LINUX :

aws lambda invoke --function-name apigetddb out --log-type Tail \
--query 'LogResult' --output text |  base64 -d
