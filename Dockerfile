FROM node:16-alpine

# Set working directory
WORKDIR /app

# Add package.json to WORKDIR and install dependencies
COPY package*.json ./
RUN yarn

# Add source code files to WORKDIR
COPY . .

# Application port (optional)
# EXPOSE 3000

# Debugging port (optional)
# For remote debugging, add this port to devspace.yaml: dev.ports[*].forward[*].port: 9229
# EXPOSE 9229

# Container start command (DO NOT CHANGE and see note below)
CMD ["yarn" , "dev"]