FROM node:18

LABEL AUTHOR: Eliud Gateri <egateri@gmail.com>

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install && npm install -g serve
# If you are building your code for production
 #RUN npm ci --omit=dev

# Bundle app source
COPY . .

RUN npm run build

CMD [ "serve", "-s", "build" ]

# Build the app
#  docker build -t node-web-app .
#  Run the app
#  docker run -p 80:5500 -d node-web-app
# test the app
# curl -i localhost:80

# get the docker ID  & Enter the container
# docker ps
# docker exec -it <container id> /bin/bash