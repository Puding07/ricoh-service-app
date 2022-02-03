FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

# For production
# RUN npm ci --only=production
RUN yarn

# Bundle app source
COPY . .

EXPOSE 3010

CMD [ "node", "./src/server.js" ]