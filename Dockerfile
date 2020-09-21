# Stage 1

FROM node:10-alpine as build-step

RUN mkdir  /spacexapp

WORKDIR /spacexapp

COPY . .
RUN npm install
RUN npm run build --prod

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step  /spacexapp/dist/spacexProgram /usr/share/nginx/html
