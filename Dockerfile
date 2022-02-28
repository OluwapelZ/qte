FROM node:8.11

RUN apt-get update && apt-get install -y

WORKDIR /app

COPY package*.json .babel.config.json./

COPY . /app
RUN npm install
RUN npm run build

EXPOSE 3000
CMD [ "npm", "run", "start:dev" ]