FROM node:10-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./
COPY tsconfig.json .

RUN npm i
RUN npm i nodemon -g
RUN npm i typescript -g
RUN npm i sequelize-cli -g

COPY . .

EXPOSE 5000
EXPOSE 5433

CMD ["npm run dev"]