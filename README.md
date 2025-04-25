# 🎨 Samas Arts - E-Commerce Art Store on Amazon ECS

Welcome to **Samas Arts**, an online art store where you can purchase amazing art pieces, all deployed on **Amazon ECS (Fargate)** with a **Node.js** backend, and utilizing **Terraform** for infrastructure provisioning. The app is containerized with **Docker**, pushed to **Amazon ECR**, and deployed via **ECS**.



---

## 🧰 Tech Stack & Tools

- **Frontend/Backend:** Node.js
- **Infrastructure as Code:** Terraform
- **Container Registry:** Amazon ECR
- **Container Orchestration:** Amazon ECS (Fargate)
- **CI/CD:** GitHub Actions (or Jenkins, update as necessary)
- **Security Scanning:** Trivy, Gitleaks
- **Code Quality:** SonarQube
- **Monitoring (Optional):** AWS CloudWatch

---

## 🔧 Features

- 🛒 Art listings for sale, with details and images.
- 🐳 Dockerized Node.js app for production-ready deployment.
- 🔐 Security scans using Trivy (for vulnerabilities) and Gitleaks (for secret detection).
- 🧹 Code quality and bug analysis via SonarQube.
- ☁️ Automated infrastructure provisioning with Terraform (including ECS, ECR, IAM).
- 📦 Integrated CI/CD pipelines for build, test, scan, and deployment.
- 📊 AWS CloudWatch monitoring (optional for tracking and alerts).

---

## 📁 Folder Structure

```
.
├── app/                    # Node.js app with API & front-end
├── docker/                 # Dockerfile for Node.js app
├── terraform/              # Terraform configuration for ECS, ECR, etc.
├── .github/workflows/     # GitHub Actions CI/CD configuration
├── sonar-project.properties # SonarQube project configuration
├── trivy-report.json       # Output from Trivy security scan
└── README.md               # This file
🚨 Security & Code Quality

# Tool	Description
Trivy	Scans Docker images for known vulnerabilities
Gitleaks	Detects secrets in the source code (e.g., API keys, credentials)
SonarQube	Analyzes and reports on code quality, bugs, and vulnerabilities
📦 Deployment Instructions
# Prerequisites
Ensure you have the following installed:

Terraform

AWS CLI

Docker

Node.js

GitHub Actions (if using GitHub CI/CD)

# Steps
Clone the repo:


git clone https://github.com/Pepuhove/samas-arts.git
cd samas-arts
Configure AWS credentials: Make sure your AWS CLI is set up with appropriate access credentials:


aws configure
Terraform Setup: Navigate to the terraform/ directory and initialize Terraform:


cd terraform/
terraform init
terraform plan
terraform apply
Build Docker Image & Push to ECR: Build the Docker image and push it to Amazon ECR:


docker build -t samas-arts .
aws ecr get-login-password | docker login --username AWS --password-stdin <aws_account_id>.dkr.ecr.<region>.amazonaws.com
docker tag samas-arts:latest <aws_account_id>.dkr.ecr.<region>.amazonaws.com/samas-arts:latest
docker push <aws_account_id>.dkr.ecr.<region>.amazonaws.com/samas-arts:latest
Run Security Scans: Perform security scans with Trivy and Gitleaks:


gitleaks detect
trivy image <aws_account_id>.dkr.ecr.<region>.amazonaws.com/samas-arts:latest
Deploy to ECS: Terraform will automatically deploy the app to ECS (Fargate). Check the ECS cluster after running terraform apply.

Access the Application: Your art store will be accessible via the public IP or load balancer URL provisioned by ECS.

👨‍💻 Author
Pepukai Hove
🌍 Cape Town, South Africa
📧 pepshove@gmail.com
🔗 LinkedIn
🐙 GitHub

📜 License
This project is licensed under the MIT License.

📸 Screenshots
Add screenshots of the live website or key features here.

![Screenshot (129)](https://github.com/user-attachments/assets/014bf768-8aef-47e7-a481-bdf83b8b307f)


![Screenshot (128)](https://github.com/user-attachments/assets/f9be439e-2863-433e-b8b4-cdcf7d633397)


![Screenshot (126)](https://github.com/user-attachments/assets/dd511426-8969-4a86-a71c-1e74d012477f)


![Screenshot (125)](https://github.com/user-attachments/assets/6fed18f1-3747-4673-be73-65b6da9ded26)







