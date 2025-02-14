# Use the official Node.js image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first for efficient caching
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the entire frontend project
COPY . .

# Expose the React app's default port
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
