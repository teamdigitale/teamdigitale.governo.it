FROM node:7.9.0

MAINTAINER Federico Feroldi <federico@teamdigitale.governo.it>

ENV NODE_ENV production

# ENV SLACK_TOKEN
# ENV CIRCLECI_TOKEN

ADD package.json package.json
ADD yarn.lock yarn.lock

RUN yarn install

ADD bot.js bot.js
ADD skills skills

CMD node bot.js
