FROM node:18-alpine
WORKDIR /product
COPY . .
RUN npm config set strict-ssl false
RUN npm install
EXPOSE 3003
ENTRYPOINT npm start