# Use official Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app files
COPY . .

# App listens on port 3000
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
