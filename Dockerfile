FROM mhart/alpine-node:latest

ADD package.json package.json
RUN npm install
ADD . .

EXPOSE 3000

CMD ["node","api.js"]
