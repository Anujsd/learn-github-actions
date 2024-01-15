FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4040

ENTRYPOINT [ "npm","run","dev"]