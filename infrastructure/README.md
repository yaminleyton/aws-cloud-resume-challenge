markdown# Cloud Resume Challenge InfrastructureThis directory contains the Infrastructure as Code (IaC) for the 
visitor counter component of my cloud resume.## Components- DynamoDB table for storing view count- Lambda function 
for processing requests- API Gateway (HTTP API) for exposing the Lambda function## DeploymentTo deploy this 
infrastructure:1. Install AWS SAM CLI2. Run sam build3. Run sam deploy --guided
