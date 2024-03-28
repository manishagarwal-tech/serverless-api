# Serverless Deployment with GitHub Actions

This repository contains a GitHub Actions workflow (main.yml) for deploying a Serverless application to AWS Lambda using Serverless Framework. The workflow is triggered on pushes to the main branch of the repository.

### Workflow Description
1. Trigger: The workflow is triggered automatically on every push to the main branch of the repository.

2. Job: The workflow consists of a single job named 'deploy' that runs on an Ubuntu latest environment.

3. Steps:
  * **Checkout Repository:** Checks out the repository code.
  * **Setup Node.js:** Sets up Node.js environment using the specified version.
  * **Configure AWS Profile:** Configures the AWS CLI with the provided AWS access key ID and secret access key, and sets the default AWS region.
  * **Deploy Serverless Service:** Deploys the Serverless application using Serverless Framework. The deployment is performed using the 'serverlessUser' AWS profile.

##Usage
To use this workflow in your own project:
  1. Ensure that you have a Serverless application set up with a serverless.yml configuration file.
  2. Set up your AWS credentials and AWS profile named 'serverlessUser' locally or as secrets in your GitHub repository settings.
  3. Copy the main.yml workflow file into your .github/workflows directory.
  4. Adjust the workflow as needed to match your project structure and requirements.
  5. Commit and push the changes to your GitHub repository.
  
With this workflow in place, your Serverless application will be automatically deployed to AWS Lambda whenever changes are pushed to the main branch of your repository.

# License
This project is licensed under the [MIT License](https://opensource.org/license/mit "Visit MIT License website")
