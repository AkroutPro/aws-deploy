# Use Node.js 16 LTS
FROM node:16

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the app source code
COPY . .

# Expose port 5000
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
