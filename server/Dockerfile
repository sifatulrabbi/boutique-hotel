FROM node:16-alpine

WORKDIR /app/server

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]

EXPOSE 8080