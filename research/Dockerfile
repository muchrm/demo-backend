FROM node:slim

# Install dependencies
RUN npm install -g yarn

WORKDIR /work
# Run the users microservice when the container starts.
ENTRYPOINT yarn start:watch

# Service listens on port 3000.
# EXPOSE 3000
