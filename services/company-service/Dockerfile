FROM node:alpine

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3003

CMD ["sh", "-c", "npx tsc --skipLibCheck && node dist/index.js"]
