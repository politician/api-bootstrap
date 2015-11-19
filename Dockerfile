FROM mhart/alpine-node:0.10.40

ADD package.json package.json
RUN npm install
ADD . .

EXPOSE 3000

CMD ["node","api.js"]