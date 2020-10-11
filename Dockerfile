# Node image.
FROM node:12-alpine

# Server Directory
WORKDIR /server

# Install app dependencies
COPY package*.json ./

RUN npm install

#Bundle app source
COPY . .

EXPOSE 8080

CMD ["npm","start"]