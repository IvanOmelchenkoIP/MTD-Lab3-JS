FROM node:latest

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install chalk
RUN npm install readline-sync

COPY . /app/

CMD ["node", "./index.js"]
