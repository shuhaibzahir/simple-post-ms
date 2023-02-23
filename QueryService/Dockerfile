FROM node:alpine3.17
WORKDIR /app

COPY ./package* .
RUN npm install
COPY . .
EXPOSE 3004
ENTRYPOINT [ "npm","run","dev" ]