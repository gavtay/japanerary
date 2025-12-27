# Japanerary

### Travel Guide & Itinerary Website

A performance driven, static-first Japan travel site with guides, tips, and tricks for your itinerary.

Designed and built for performance, scalability, maintainability, and cost efficiency.

## Tech Stack

### Frontend
[![image](https://img.shields.io/badge/Astro-0C1222?style=for-the-badge&logo=astro&logoColor=FDFDFE)](https://astro.build/)
![image](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

### Infrastructure & Deployment
- Docker – Keeps local environments consistent for contributors
- GitHub Actions – CI pipeline for linting, formatting, and deployment
- **Planned:** Static assets will be deployed using Amazon Web Services (AWS) and Cloudflare

## Getting Started

### Prerequisites
- [![image](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
- [![image](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com/)
- [![image](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
- **Recommended VS Code Extensions:** Astro, Prettier, ESLint

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/gavtay/japanerary.git
   cd japanerary
   ```

2. Run with Docker:
    ```bash
    docker compose up # build and run docker container
    docker compose down # close docker containers
    ```

    **Or Without Docker:**
    ```bash
    npm install # install dependencies
    npm run dev # start dev server
    ```

3. Open [http://localhost:4321](http://localhost:4321)

## Project Overview

This is an MVP for a Japan travel site, built with a lightweight workflow to maximize progress.

**Goals:** Deliver fast, SEO-friendly travel content while minimizing infrastructure complexity. The foundation is designed to scale and potentially support:
- User authentication
- Comments and community features  
- Additional countries and destinations

**Workflow:**
- **Public repo** – All code and issues are visible for transparency
- **GitHub Issues** – Track features, bugs, and tasks tied to commits/PRs
- **CI/CD** – Automated formatting checks, linting, and deployment via GitHub Actions

This approach prioritizes rapid feature shipping while maintaining code quality and organization.

## CI/CD Pipeline

On every pull request and merge:
1. Code formatting is validated using Prettier
2. Code is run through several linters
3. The site is built using Astro
4. Static assets are deployed to AWS S3

This ensures consistent code quality and reliable deployments.

## Contributing

PRs are welcome! Please open an [issue](https://github.com/gavtay/japanerary/issues) first to discuss changes.

For questions or direct contact: [legal.plyosoft@gmail.com](mailto:legal.plyosoft@gmail.com)

## License
Distributed under the MIT License. See `LICENSE` for more information.
