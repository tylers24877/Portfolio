import json
import boto3
import os

sns_client = boto3.client('sns')

def lambda_handler(event, context):
    if 'body' in event:
        request_body = event['body']
    else:
        return {
            'statusCode': 400,
            'body': json.dumps('No body found in the request')
        }
    
    message = request_body
    region = os.environ['SNS_ARN']

    try:
        response = sns_client.publish(
            TopicArn=region,
            Message=message
        )
        return {
            'statusCode': 200,
            'body': json.dumps('Data published to SNS topic successfully')
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps('Error publishing data to SNS topic: {}'.format(str(e)))
        }
