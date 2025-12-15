# Cloud File Storage Application ☁️📁

A secure cloud-based file storage system built using **AWS services** and a **React frontend**, implementing role-based access control for uploading and downloading files.

---

## 🚀 Project Overview

This project allows users to securely upload and download files from the cloud. Authentication and authorization are handled using **Amazon Cognito**, ensuring that only permitted users can perform specific actions.

The system is designed with scalability, security, and serverless architecture in mind.

---

## 🧩 Features

- 🔐 User authentication using Amazon Cognito  
- 👥 Role-based access control (Uploader / Downloader)  
- ⬆️ Secure file upload using pre-signed S3 URLs  
- ⬇️ Secure file download using pre-signed S3 URLs  
- 🗂️ File metadata storage in DynamoDB  
- ⚡ Serverless backend using AWS Lambda  
- 🌐 REST APIs exposed via API Gateway  
- 🖥️ Frontend built with React (Vite)

---

## 🏗️ Architecture

**Frontend**
- React (Vite)
- `react-oidc-context` for Cognito authentication

**Backend**
- AWS Lambda (Python / Node.js)
- Amazon API Gateway
- Amazon S3 (file storage)
- Amazon DynamoDB (metadata storage)

**Security**
- Amazon Cognito User Pool
- JWT-based authorization
- IAM roles and policies

---

## 🧑‍💻 User Roles

| Role        | Permissions |
|-------------|------------|
| Uploader    | Upload files |
| Downloader  | Download files |
| Admin (optional) | Manage access |

Access is controlled using Cognito groups and validated inside Lambda functions.

---

## 📁 Folder Structure

cloud-file-storage/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── auth/
│ │ ├── styles/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── index.html
│
├── backend/
│ ├── uploadLambda/
│ ├── downloadLambda/
│ └── utils/
│
├── README.md
└── .gitignore



---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/cloud-file-storage.git
cd cloud-file-storage
2️⃣ Frontend Setup
bash
Copy code
cd frontend
npm install
npm run dev
3️⃣ Backend Setup
Create S3 bucket

Create DynamoDB table

Configure Lambda functions

Set environment variables

Attach IAM permissions

Configure API Gateway routes

🔑 Environment Variables (Lambda)
env
BUCKET_NAME=your-s3-bucket
METADATA_TABLE=your-dynamodb-table
REGION=us-east-1
🛡️ Security Considerations
Files are never uploaded directly through the backend

Pre-signed URLs expire automatically

JWT tokens are validated on every request

Least-privilege IAM policies are used

📌 Use Cases
Secure internal file sharing

Cloud storage proof-of-concept

Learning AWS serverless architecture

Role-based access systems

📚 Technologies Used
AWS S3

AWS Lambda

AWS DynamoDB

AWS API Gateway

AWS Cognito

React

Vite

JavaScript / Python

---

## 👤 Author

**Harrsini M S**  
AWS Cloud Intern @ **F13 Technologies**
