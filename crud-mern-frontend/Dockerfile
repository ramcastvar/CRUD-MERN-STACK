# Stage for Production

FROM node:20.12.2-alpine
WORKDIR /app
COPY package*.json .
RUN npm install --production
RUN npm install -g serve
COPY /. ./build
EXPOSE 3000
#CMD ["npm", "start"]
CMD ["serve", "-s", "build"]
