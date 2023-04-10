# Use node image version 14
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN yarn

# Copy source code
COPY . .

# Build TypeScript code
RUN yarn run build

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]
