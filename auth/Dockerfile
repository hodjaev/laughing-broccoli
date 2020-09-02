FROM node:12.18-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production --silent
COPY . .
CMD ["npm", "start"]