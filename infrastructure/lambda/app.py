import json
import boto3
from decimal import Decimal

class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Decimal):
            return int(obj)
        return super(DecimalEncoder, self).default(obj)

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('cloud-resume')

def lambda_handler(event, context):
    # Common headers
    headers = {
        'Access-Control-Allow-Origin': 'https://resume.yamincloud.click',  # Your domain
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS,POST',
        'Content-Type': 'application/json'
    }
    
    # Handle OPTIONS
    if event.get('requestContext', {}).get('http', {}).get('method') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': headers,
            'body': ''
        }
    
    try:
        response = table.get_item(Key={
            'id': 0
        })
        
        if 'Item' in response:
            views = response['Item']['views']
            views += 1
            print(f"Incrementing views to: {views}")
            
            table.put_item(Item={
                'id': 0,
                'views': views
            })
            
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps({'count': views}, cls=DecimalEncoder)
            }
        else:
            return {
                'statusCode': 404,
                'headers': headers,
                'body': json.dumps({'error': 'Item not found'})
            }
            
    except Exception as e:
        print(f"Error: {str(e)}")
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({'error': str(e)})
        }
