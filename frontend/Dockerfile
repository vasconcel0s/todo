FROM node:12.20.1-buster-slim

#backend url, in production it needs to be passed by parameter in building
ENV REACT_APP_API_URL http://localhost:5000

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY package.json yarn.lock /home/node/app/

RUN yarn install

COPY . ./

EXPOSE 3000

CMD ["yarn", "start"]
