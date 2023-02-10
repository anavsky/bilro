FROM node:18-alpine
WORKDIR /account
COPY . .
RUN npm config set strict-ssl false
RUN npm install
EXPOSE 3002
ENTRYPOINT npm start