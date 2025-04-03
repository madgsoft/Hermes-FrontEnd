# Use a Node.js base image for building the application
FROM node:20.12.2 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the entire application code
COPY . .

# Build the application using Vite
RUN npm run build

# Use a lightweight Nginx image to serve the built application
FROM nginx:alpine

# Copy the built application from the previous stage to the Nginx serving directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

