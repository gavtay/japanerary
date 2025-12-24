# Japanerary

# Travel Guide & Itinerary Website

A performance driven, static-first Japan travel with guides, tips, and tricks for users itineraries. Designed and built for scalability, maintainability, and cost efficiency.

## Project & Process

This project is a two-person MVP that was intentionally built with a lightweight workflow in mind to maximize progress:

- **Public repo:** All code and issues are visible to show progress and transparency.  
- **GitHub Issues:** Used to track features, bugs, and technical tasks tied to commits and PRs.   
- **CI/CD with GitHub Actions & Prettier:** Ensures consistent code formatting and automated deployments.  

This approach was taken to focus on timely feature shipping, maintaining project organization, and planning for growth without over-engineering the process.

## Project Goals

- Deliver fast, SEO-friendly travel content
- Minimize infrastructure complexity for an MVP
- Establish a clean foundation that can possibly grow to support:
  - User authentication
  - Comments and community features
  - Additional countries and destinations

## Tech Stack

### Frontend
- **Astro** – Static framework excelling in static site performance
- **HTML** – Markup
- **Tailwind CSS** – Styling to require consistency
- **JavaScript (minimal)** – Used only where needed

### Infrastructure & Deployment
- **AWS S3** – Static site hosting for reliability and scalability
- **Cloudflare** – DNS, CDN, caching, and security layer
- **GitHub Actions** – CI pipeline for linting, formatting, and deployment
- **Docker** – Keeps local environments consistent across contributors

### Tooling & Workflow
- **Git & GitHub** – Version control
- **Prettier** – Code formatting
- **GitHub Issues** – Task tracking for features and bugs

## Architecture Overview

This project follows a **static-first architecture**:

- Content is built and rendered at build time using Astro
- Static assets are deployed to AWS S3
- Cloudflare sits in front as the CDN and DNS provider
- CI checks formatting and deployment automation

This approach was chosen to:
- Reduce operational complexity
- Maximize performance and SEO
- Keep hosting costs low
- Allow future backend services to be added without rewriting the frontend

## CI/CD Pipeline

On every pull request and merge:
1. Code formatting is validated using Prettier
2. The site is built using Astro
3. Static assets are deployed to AWS S3

This ensures consistent code quality and reliable deployments.

## Future Enhancements

Planned or potential improvements include:
- User authentication
- Commenting and community features
- Analytics integration (Cloudflare Web Analytics)
- Backend APIs (AWS Lambda)
- Database integration
- Expanding content to cover international

The current architecture intentionally supports these additions without requiring major changes.

## Local Development

With Docker:
```bash
npm run docker:dev # build and run docker container
```

Without Docker:
```bash
npm install # install dependencies
npm run dev # start dev server
```

## License
MIT License
