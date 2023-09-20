# parent image
FROM node:18.16.0-slim

# set author
LABEL maintainer="enter-your-email"

# set env.
ENV DEBIAN_FRONTEND noninteractive

# as 'node' user,
USER node
# init docker filesystem,
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# as 'root' user,
USER root
# install git, curl (via apt-get),
RUN apt-get update && apt-get install -y git curl
# install vue (via npm)
RUN npm install -g vue@next 
# install sonarqube-scanner (via npm)
RUN npm install -g sonarqube-scanner

# as 'node' user,
USER node
# install node modules,
COPY --chown=node:node package.json .
COPY --chown=node:node package-lock.json .
RUN npm install
### note: if no change occured in 'package.json' / 'package-lock.json' files,
###       the 'RUN npm install' layer will be kept in cache.

# copy all files in dir.
COPY --chown=node:node . .

# config default port
EXPOSE 3000

# docker container default command
CMD [ "npm", "run", "dev" ]

# END
