FROM node:slim
# Install Kong Dashboard
RUN npm install -g kong-dashboard

ENTRYPOINT kong-dashboard start --kong-url http://kong:8001 --basic-auth mis=mis2008

EXPOSE 8080
