import json
import boto3
import decimal
dynamodb = boto3.resource('dynamodb')
client = boto3.client('dynamodb')

def replace_decimals(obj):
    if isinstance(obj, list):
        for i in range(len(obj)):
            obj[i] = replace_decimals(obj[i])
        return obj
    elif isinstance(obj, dict):
        for k in obj:
            obj[k] = replace_decimals(obj[k])
        return obj
    elif isinstance(obj, decimal.Decimal):
        if obj % 1 == 0:
            return int(obj)
        else:
            return float(obj)
    else:
        return obj
        
def lambda_handler(event, context):
    
    table = dynamodb.Table('countertable2')
    body = table.scan()
    items = replace_decimals(body['Items'])
    
    # data = client.get_item(
    #     TableName='countertable',
    #     Key = {
    #         'siteviews': {'N': '0'}
    #     }
    # )
    
    #data['Item']['Quantity']['N'] = str(int(data['Item']['Quantity']['N']) + 1)
    
    response = client.update_item(
        TableName='countertable2',
        Key = {
            'siteviews': {'N': '0'},
        },
        UpdateExpression = 'ADD Quantity :inc',
        ExpressionAttributeValues = {":inc" : {"N": "1"}},
        ReturnValues = 'UPDATED_NEW'
        )
        
    value = response['Attributes']['Quantity']['N']
    
    return {      
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': 'https://*.ericnbello.com',
            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
            'Access-Control-Allow-Credentials': 'true',
            'Content-Type': 'application/json'
        },
        'body': value
    }