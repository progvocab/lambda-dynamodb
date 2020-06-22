Install docker toolbox 


```
docker network create lambda-local

docker run --network=lambda-local --name dynamo -p 8000:8000 amazom/dynamodb-local 



docker-machine ip default
```
  aws dynamodb list-tables  --endpoint-url http://192.1.1.1:8000
{
    "TableNames": []
}
