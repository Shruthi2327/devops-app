# Use official Node.js base image
FROM node:18

# Create working directory inside container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app files
COPY . .

# Expose the app port
EXPOSE 3000

# Run the app
CMD ["node", "app.js"]
