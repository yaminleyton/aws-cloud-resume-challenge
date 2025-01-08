# AWS Cloud Resume Challenge

Welcome to my **AWS Cloud Resume Challenge** project! This repository documents my journey to implement a scalable, cloud-based resume using AWS services, while demonstrating my technical and problem-solving skills in cloud engineering.

## **Architecture Overview**

The architecture for this project involves several AWS services working together to deliver a highly available and responsive web application. Below is an overview of the design:

1. **Frontend**:
   - **Route 53**: Manages the domain and DNS routing.
   - **CloudFront**: Distributes content globally with caching for better performance.
   - **S3 Bucket**: Hosts the static files (HTML, CSS, and JavaScript) for the website.

2. **Backend**:
   - **Lambda**: Handles serverless backend logic, including processing user interactions.
   - **DynamoDB**: Stores and retrieves the website visitor counter and other dynamic data.

3. **Integration**:
   - The frontend communicates with the backend to display real-time visitor counts, which are fetched from DynamoDB.
   - All updates to the visitor count are processed through a Lambda function.
  
### **Architecture Diagram**

Below is a conceptual visualization of the architecture:

![AWS Cloud Resume Architecture](<Cloud resume.drawio.png>)

> The architecture demonstrates the connection between the user, Route 53, CloudFront, S3, Lambda, and DynamoDB.

## **Features**

- **Scalable Frontend**:
  - Static website hosted on an S3 bucket, distributed via CloudFront.
  - Custom domain configured with Route 53 for professional branding.

  
- **Dynamic Backend**:
  - Visitor counter functionality using DynamoDB and Lambda.
  - Serverless architecture ensures cost-effectiveness and scalability.

- **Security**:
  - HTTPS enforced via CloudFront.
  - IAM roles configured for least privilege access.

## **Technologies Used**

- **AWS Services**: Route 53, CloudFront, S3, Lambda, DynamoDB, IAM.
- **Languages**: HTML, CSS, JavaScript, Python (for Lambda functions).
- **Infrastructure as Code**: AWS CLI, Boto3.

## **Lessons Learned**

- **Serverless Benefits**: Lambda and DynamoDB make it easy to build and scale dynamic applications without managing servers.
- **Security Best Practices**: IAM roles and policies are critical to secure cloud resources.
- **Caching Strategies**: CloudFront improves performance but requires careful cache invalidation for updates.

Feel free to explore the code and architecture, and reach out if you have any questions or feedback!

