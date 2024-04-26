# Stage Build

#FROM node:alpine AS build-stage
FROM node:alpine
WORKDIR /app
COPY package*.json .
#RUN npm install
RUN npm install --production
COPY . .
#RUN npm run build

# Stage Production

#FROM node:alpine AS production-stage
#WORKDIR /app
#COPY package*.json .
#RUN npm install --production
#COPY --from=build-stage /app/build ./build
EXPOSE 3000
CMD ["node", "server.js"]