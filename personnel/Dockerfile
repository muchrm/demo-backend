FROM node:slim

# Install dependencies
RUN npm install -g yarn
ADD . /work
WORKDIR /work
RUN yarn

# Run the users microservice when the container starts.
ENTRYPOINT yarn start

# Service listens on port 8080.
EXPOSE 80
