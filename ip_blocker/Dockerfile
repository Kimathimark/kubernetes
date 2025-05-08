# # Step 1: Use the official Node.js image as the base image (with LTS version)
# FROM node:18

# # Step 2: Set the working directory inside the container
# WORKDIR /app

# # Step 3: Copy package.json and package-lock.json to the container
# COPY package*.json ./

# # Step 4: Install dependencies inside the container
# RUN npm install

# # Step 5: Copy the rest of the application code to the container
# COPY . .

# # Step 6: Expose the application port (use the port your app listens on)
# EXPOSE 3000

# # Step 7: Set the environment variable for production (Optional, depending on your build)
# ENV NODE_ENV=production

# # Step 8: Command to run the application
# CMD ["node", "server.js"]
# Use Node.js official image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the server.js and package.json to the container
COPY server.js /app

# Install express (since it’s used in our server)
RUN npm init -y && npm install express

# Expose port 3000
EXPOSE 3000

# Command to run the app
CMD ["node", "server.js"]
