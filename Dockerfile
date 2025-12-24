# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy only dependency info first (for cache)
COPY package.json package-lock.json ./
RUN npm ci

# Copy everything else
COPY . .

# Expose Astro dev server port
EXPOSE 4321

# Default command
CMD ["npm", "run", "dev", "--", "--host"]