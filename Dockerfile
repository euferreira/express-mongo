FROM node:21.2.0-alpine3.18

RUN apk add --no-cache bash

#COPY package*.json ./
COPY . .
COPY ./.docker/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

WORKDIR /home/node/app
