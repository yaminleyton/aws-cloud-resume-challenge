# Cloud Resume Challenge Infrastructure

This repository contains the Infrastructure as Code (IaC) setup for the visitor counter component of my Cloud Resume Challenge project.

## Overview

The visitor counter is a key feature of my cloud resume, demonstrating how serverless architecture can be used to create scalable and efficient web solutions.

### Key Components

1. **DynamoDB Table**
   - Stores the view count data persistently.
   
2. **AWS Lambda Function**
   - Processes requests to update and retrieve the visitor count.
   
3. **API Gateway**
   - Exposes the Lambda function as a public HTTP API endpoint.

## Deployment Instructions

Follow these steps to deploy the infrastructure using AWS SAM (Serverless Application Model):

1. **Install AWS SAM CLI**
   - Ensure that you have the AWS SAM CLI installed.

2. **Build the Application**
   - Run the following command to build the application locally:
     ```bash
     sam build
     ```

3. **Deploy the Application**
   - Use the guided deployment process to deploy the infrastructure to your AWS account:
     ```bash
     sam deploy --guided
     ```
   - During deployment, you will be prompted to provide configuration details like stack name, region, and permissions.

## Post-Deployment Configuration

After deployment:
- Note the API Gateway endpoint URL from the output. This URL will be used to integrate the visitor counter with the frontend.
- Ensure the necessary permissions are set for the DynamoDB table and Lambda function, following the principle of least privilege.

## Future Improvements

- **Monitoring and Alerts**: Integrate AWS CloudWatch for monitoring and setting up alerts for failures.
- **Testing**: Add unit and integration tests for the Lambda function.
- **Scalability**: Consider enabling Auto Scaling for DynamoDB if view count requests increase significantly.

---

Feel free to contribute by submitting pull requests or raising issues. Thank you for exploring my Cloud Resume Challenge!
