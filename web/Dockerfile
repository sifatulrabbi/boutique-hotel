FROM node:16-alpine

WORKDIR /app/web

COPY package.json ./

RUN npm install

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN npm run build

CMD [ "npm", "run", "start" ]

EXPOSE 3000