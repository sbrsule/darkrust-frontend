FROM node:17.8.0-alpine

WORKDIR /app

ENV PATH /app/node_modlues/.bin:$PATH

COPY package.json ./

COPY package-lock.json ./

RUN npm install --silent

RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

CMD ["npm", "start"]