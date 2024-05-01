# Stage Build

#FROM node:alpine AS build-stage
#WORKDIR /app
#COPY package*.json .
#RUN npm install
#COPY . .
#RUN npm run build

# Stage Production

FROM node:alpine AS production-stage
WORKDIR /app
COPY package*.json .
RUN npm install --production
COPY ./build .
EXPOSE 3000
CMD ["npm", "start"]
