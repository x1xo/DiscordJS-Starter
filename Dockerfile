FROM node:18-alpine3.16

RUN mkdir -p /home/app
WORKDIR /home/app

COPY . .
RUN npm install

CMD ["npm", "start"]