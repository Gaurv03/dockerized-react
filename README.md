# 🚲 Cascadia Custom Cycles — Dockerized React & Automated CI/CD Pipeline

![GitHub Actions Workflow Status](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![Docker](https://img.shields.io/badge/Container-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Web%20Server-Nginx%20Alpine-009639?style=for-the-badge&logo=nginx&logoColor=white)
![AWS EC2](https://img.shields.io/badge/Cloud-AWS%20EC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white)
![React](https://img.shields.io/badge/Frontend-React%2019%20%7C%20Vite%20%7C%20TypeScript-61DAFB?style=for-the-badge&logo=react&logoColor=black)

An enterprise-ready, automated DevOps deployment pipeline for a modern React & TypeScript web application (**Cascadia Custom Cycles**). 

This project demonstrates a production-grade continuous integration and continuous deployment (**CI/CD**) lifecycle using **Docker**, **GitHub Actions**, **Docker Hub**, and an **AWS EC2** virtual server. Every push to the `main` branch undergoes automated validation, containerization, image registry publishing, and remote host deployment.

---

## 🏗 System Architecture & CI/CD Flow

```mermaid
flowchart TD
    subgraph Developer
        Dev[👨‍💻 Code Commit & Push]
    end

    subgraph GitHub Actions Runner [GitHub Actions CI/CD Pipeline]
        Checkout[1. Checkout Repository]
        NodeSetup[2. Setup Node.js 22 & Cache]
        Install[3. Install Dependencies: npm ci]
        Test[4. Run Automated Tests: npm test]
        Build[5. Compile & Build: npm run build]
        DockerLogin[6. Authenticate with Docker Hub]
        DockerBuild[7. Multi-Stage Docker Build]
        DockerPush[8. Push Tagged Images to Docker Hub]
    end

    subgraph Docker Registry
        Hub[(Docker Hub Registry)]
    end

    subgraph Cloud Infrastructure [AWS EC2 Instance]
        SSHDeploy[9. SSH Action on EC2]
        Pull[10. Pull Latest Docker Image]
        Restart[11. Stop & Remove Stale Container]
        Run[12. Run Container with Auto-Restart on Port 80]
        Nginx[13. Nginx Alpine Serves Production Static Assets]
    end

    Dev -->|git push origin main| Checkout
    Checkout --> NodeSetup --> Install --> Test --> Build --> DockerLogin --> DockerBuild --> DockerPush
    DockerPush --> Hub
    DockerPush --> SSHDeploy
    SSHDeploy --> Pull
    Hub -.->|Pull image by SHA| Pull
    Pull --> Restart --> Run --> Nginx
```

---

## 🌟 Key DevOps & Engineering Highlights

- **Automated CI/CD Pipeline**: Fully hands-off deployment lifecycle orchestrated via GitHub Actions workflows.
- **Multi-Stage Docker Architecture**:
  - **Build Stage**: Uses `node:22-alpine` to compile TypeScript and bundle assets with Vite.
  - **Production Runtime**: Uses high-performance `nginx:alpine` to serve static assets, reducing image size to a fraction of traditional Node runtime images (~25MB footprint) and significantly minimizing attack surface.
- **Immutable Deployment & Versioning**: Every Docker image is tagged with both the specific commit SHA (`$IMAGE_NAME:${{ github.sha }}`) and `latest` for traceability and seamless rollback capabilities.
- **Automated Cloud Provisioning**: Automatic SSH deployment into AWS EC2, graceful termination of outdated containers, and zero-downtime replacement with restart policies (`unless-stopped`).
- **Security Best Practices**: Zero plaintext credentials. All sensitive tokens (Docker Hub access token, EC2 SSH keys, server IP) are safeguarded with **GitHub Actions Encrypted Secrets**.

---

## 🛠 Tech Stack

| Domain | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | React 19 + TypeScript | UI component architecture & strict type safety |
| **Build Tool** | Vite 8 | Ultra-fast HMR and optimized production bundling |
| **Containerization** | Docker (Multi-Stage) | Environment parity and isolated runtime container |
| **Web Server** | Nginx Alpine | Production static file serving and HTTP reverse proxy |
| **CI/CD Automation** | GitHub Actions | Automated lint, test, build, containerize, and deploy |
| **Container Registry** | Docker Hub | Central repository for versioned container images |
| **Hosting & Cloud** | AWS EC2 (Ubuntu Linux) | Production cloud host server running Docker Engine |

---

## 📁 Repository Structure

```text
dockerized-react/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD pipeline definition
├── src/
│   ├── assets/                 # SVGs, optimized photography & branding
│   ├── components/             # Reusable UI components (Hero, Estimator, Modal, etc.)
│   ├── data/                   # Mock specs and build catalog data
│   ├── types/                  # TypeScript interface declarations
│   ├── App.tsx                 # Root application component
│   └── main.tsx                # React DOM entry point
├── Dockerfile                  # Multi-stage production container definition
├── .dockerignore               # Optimized Docker build context exclusions
├── package.json                # Project scripts, dependencies, and metadata
├── tsconfig.json               # TypeScript compiler options
└── vite.config.ts              # Vite configuration
```

---

## 🐳 Dockerfile Breakdown

The project utilizes a two-stage build to ensure minimal container overhead:

```dockerfile
# Stage 1: Build static assets
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve assets with Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## ⚙️ GitHub Actions Secrets Configuration

To replicate this continuous deployment pipeline, configure the following secrets in your repository (**Settings > Secrets and variables > Actions**):

| Secret Name | Description | Example / Format |
| :--- | :--- | :--- |
| `DOCKERHUB_USERNAME` | Your Docker Hub account username | `johndoe` |
| `DOCKERHUB_TOKEN` | Docker Hub Personal Access Token (Read & Write) | `dckr_pat_xxxx...` |
| `EC2_HOST` | Public IP or Public DNS of your AWS EC2 instance | `54.210.xx.xx` |
| `EC2_USER` | SSH user for your EC2 instance | `ubuntu` or `ec2-user` |
| `EC2_SSH_KEY` | Private PEM key content for SSH access | `-----BEGIN RSA PRIVATE KEY-----...` |

---

## 🚀 Local Development & Setup

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v20+ recommended)
- [Docker](https://www.docker.com/) installed and running locally

### 2. Run Locally with Node

```bash
# Clone the repository
git clone https://github.com/<your-username>/dockerized-react.git
cd dockerized-react

# Install dependencies
npm ci

# Run development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

### 3. Run Locally with Docker

```bash
# Build the Docker image
docker build -t dockerized-react:local .

# Run the container locally on port 8080
docker run -d --name react-app -p 8080:80 dockerized-react:local

# Visit the application in your browser
open http://localhost:8080

# Stop and clean up container
docker stop react-app && docker rm react-app
```

---

## 🔄 CI/CD Pipeline Workflow Steps

When code is pushed to the `main` branch, the `.github/workflows/deploy.yml` workflow automatically executes:

1. **Checkout Repository**: Pulls the latest code using `actions/checkout@v4`.
2. **Setup Node.js**: Installs Node 22 and caches `npm` modules for high-speed builds.
3. **Install Dependencies**: Executes deterministic clean install via `npm ci`.
4. **Run Tests**: Validates code integrity with `npm test`.
5. **Compile App**: Validates type safety and compiles bundle with `npm run build`.
6. **Docker Hub Login**: Authenticates securely via `docker/login-action@v3`.
7. **Build Image**: Creates multi-tagged images (`:latest` and `:${{ github.sha }}`).
8. **Push Image**: Uploads container images to Docker Hub.
9. **Deploy to EC2**: Connects to the AWS EC2 server via SSH (`appleboy/ssh-action`):
   - Authenticates with Docker Hub on the remote server
   - Pulls the exact commit SHA image
   - Stops and removes the prior container safely
   - Launches the new container bound to port 80 with restart policy enabled
   - Verifies deployment with `docker ps`

## ⚠️ Security Notice & Production Considerations

> [!WARNING]
> **Educational & Demonstration Purpose Only**  
> This setup is intended as a proof-of-concept (PoC) demonstration for Docker and GitHub Actions workflows. Direct SSH deployment (`appleboy/ssh-action`) from public GitHub Actions runners into an EC2 instance using a stored private key is **not recommended for mission-critical production environments**.

In enterprise and secure production architectures, consider implementing the following best practices:
- **Zero Long-Lived Credentials**: Use **AWS OpenID Connect (OIDC)** with GitHub Actions to assume temporary IAM roles rather than storing static SSH keys or AWS access keys in secrets.
- **No Direct Port 22 Ingress**: Avoid exposing port 22 (SSH) to the public internet (`0.0.0.0/0`). Instead, manage instances using **AWS Systems Manager (SSM) Session Manager**, private subnets, or dedicated VPN / Bastion hosts.
- **Container Orchestration & GitOps**: For scalable workloads, use managed container platforms such as **Amazon ECS (Fargate)**, **AWS App Runner**, or **Kubernetes (EKS)** combined with GitOps operators (like **ArgoCD** or **Flux**) rather than manually executing remote Docker commands.
- **Secret Management**: Store runtime environment variables and secrets in dedicated secret managers like **AWS Secrets Manager** or **HashiCorp Vault**.

---

## 👤 Author

- **GitHub**: [@Gaurv03](https://github.com/Gaurv03)
- **Project**: Cascadia Custom Cycles — Dockerized React CI/CD Showcase
