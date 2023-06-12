# Base image
FROM node:18-alpine


# Set the working directory
WORKDIR /app

COPY package.json .
COPY package-lock.json .


RUN npm install serve -g

RUN npm install -g typescript

RUN npm install --frozen-lockfile

COPY . .

RUN npm run build


EXPOSE 3000


CMD ["npm", "run", "serve"]
