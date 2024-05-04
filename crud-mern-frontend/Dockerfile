# Stage Build

FROM node:20.12.2-alpine AS build-stage
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# Stage Production

FROM node:20.12.2-alpine AS production-stage
WORKDIR /app
COPY package*.json .
RUN npm install --production
RUN npm install -g serve
COPY --from=build-stage /app/build ./build
EXPOSE 3000
#CMD ["npm", "start"]
CMD ["serve", "-s", "build"]
