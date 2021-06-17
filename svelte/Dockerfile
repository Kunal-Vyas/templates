FROM node:16

# Create app directory
WORKDIR /usr/src/svelte

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json
# are copied where available (npm@5+)
COPY package*.json ./

# RUN npm install
RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000

# Start application
CMD [ "node", "server.js" ]
