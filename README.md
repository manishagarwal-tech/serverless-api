''Serverless Deployment with GitHub Actions''

This repository contains a GitHub Actions workflow (main.yml) for deploying a Serverless application to AWS Lambda using Serverless Framework. The workflow is triggered on pushes to the main branch of the repository.

Workflow Description
Trigger: The workflow is triggered automatically on every push to the main branch of the repository.

Job: The workflow consists of a single job named 'deploy' that runs on an Ubuntu latest environment.

'''Steps:'''

Checkout Repository: Checks out the repository code.
Setup Node.js: Sets up Node.js environment using the specified version.
Configure AWS Profile: Configures the AWS CLI with the provided AWS access key ID and secret access key, and sets the default AWS region.
Deploy Serverless Service: Deploys the Serverless application using Serverless Framework. The deployment is performed using the 'serverlessUser' AWS profile.

'''Usage'''
To use this workflow in your own project:

Ensure that you have a Serverless application set up with a serverless.yml configuration file.
Set up your AWS credentials and AWS profile named 'serverlessUser' locally or as secrets in your GitHub repository settings.
Copy the main.yml workflow file into your .github/workflows directory.
Adjust the workflow as needed to match your project structure and requirements.
Commit and push the changes to your GitHub repository.
With this workflow in place, your Serverless application will be automatically deployed to AWS Lambda whenever changes are pushed to the main branch of your repository.

'''License'''
This project is licensed under the MIT License.