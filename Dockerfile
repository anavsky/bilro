FROM node:14
WORKDIR /app-node
COPY /product .
RUN npm install
ENTRYPOINT npm start
