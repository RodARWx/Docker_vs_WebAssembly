# Minimalist Docker Proof of Concept
# Base image: Official lightweight Node.js Alpine image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy application source code
COPY server.js .

# Expose internal application port
EXPOSE 8080

# Command to execute when the container starts
CMD ["node", "server.js"]
