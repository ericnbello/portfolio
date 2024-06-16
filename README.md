# Serverless Website - Cloud Resume Challenge

## Overview
After passing the AWS Certified Cloud Practitioner exam, I was eager to apply my newfound knowledge. I embarked on the Cloud Challenge, which included a wide range of tasks using various AWS services. This README outlines the steps I took to integrate popular AWS services and complete the challenge, including customizing and deploying my portfolio site.

## Steps

### 1. Deploying as an Amazon S3 Static Website
- Created a publicly accessible S3 bucket to host the site.
- Configured the website endpoint for the default region (us-east-1).

### 2. AWS CloudFront for HTTPS
- Used CloudFront CDN to enable HTTPS traffic.
- Linked the S3 endpoint as the origin to the CloudFront distribution for a secure domain name.

### 3. Custom Domain with DNS
- Edited DNS entries with my domain provider (Google) to point to the CloudFront distribution.
- Verified ownership and obtained a custom SSL certificate from CloudFront.

### 4. Visitor Counter - JavaScript
- Created a simple `VisitorCounter` component in Next.js.
- Rendered the counter in the footer of each page.

### 5. DynamoDB Database for Count Value
- Used DynamoDB to store and update the visitor count.
- Opted for on-demand pricing to utilize the AWS Free Tier.

### 6. Python Lambda Function and API Gateway
- Created a Lambda function with Python and boto3 to interact with DynamoDB.
- Set up API Gateway to handle requests from the web app.

### 7. Infrastructure as Code (IaC) with CloudFormation and SAM CLI
- Defined resources using an AWS Serverless Application Model (SAM) template.
- Deployed resources with CloudFormation via the SAM CLI.

### 8. Source Control with Git
- Managed the code for both the back-end API and front-end website in a GitHub repository.

### 9. CI/CD with GitHub Actions
- Set up CI/CD pipelines for consistent deployment.
- Configured GitHub Actions to automatically run on code updates.
- Ensured CloudFront cache invalidation for the latest changes.

## Final Thoughts
Completing the Cloud Resume Challenge was an enriching experience that demonstrated my skills in AWS and expanded my knowledge in cloud services, automation, and infrastructure as code. This project showcased my ability to deliver professional-grade solutions using cutting-edge technologies.