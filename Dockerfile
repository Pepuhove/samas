# Start from a slim Alpine image
FROM alpine:latest

# Install required dependencies and Node.js
RUN apk add --no-cache nodejs npm

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json if available
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose port (change this to your app's port if different)
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
