# Stage 1: Build the React app
FROM node:16 AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

# Use npm ci for faster, consistent builds and cache dependencies
RUN npm ci --prefer-offline --no-audit --progress=false

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx configuration (if needed)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
