FROM node:18-alpine
WORKDIR /bilro
COPY . .
RUN npm config set strict-ssl false
RUN npm install
EXPOSE 3000
ENTRYPOINT npm start