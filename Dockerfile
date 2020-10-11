# Node image.
FROM node:12-alpine

RUN apk update && apk add bash

# Server Directory
WORKDIR /server

# Install app dependencies
COPY package*.json ./

RUN npm install

#Bundle app source
COPY . .

RUN npm run build
COPY .env ./dist/

EXPOSE 8080

CMD npm start