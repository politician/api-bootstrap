FROM mhart/alpine-node:5.1.0

ADD package.json package.json
RUN npm install
ADD . .

EXPOSE 3000

CMD ["node","api.js"]