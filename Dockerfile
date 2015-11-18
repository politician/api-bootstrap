FROM node:4.2.2

ADD package.json package.json
RUN npm install
ADD . .

EXPOSE 3000

CMD ["node","api.js"]