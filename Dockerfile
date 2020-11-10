FROM node:14.15.0-alpine3.11 as build-step
WORKDIR /app
COPY . ./
RUN npm install -s && npm run build

FROM nginx:1.19.4-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build-step /app/build .
ENTRYPOINT ["nginx", "-g","daemon off;"]
EXPOSE 80