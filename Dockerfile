FROM node:17.8.0-alpine

EXPOSE 3000

WORKDIR /app

ENV PATH /app/node_modlues/.bin:$PATH

COPY . .

CMD ["npm", "start"]