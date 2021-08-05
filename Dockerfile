# Stage 1 - build
FROM node:14-alpine as build
RUN mkdir /app
WORKDIR /app
COPY package.json ./
RUN yarn
RUN yarn add react-scripts@3.4.1 -g --silent
COPY . /app
RUN yarn build

# Stage 2 - production environment
FROM nginx:stable-alpine
COPY ./nginx.config /etc/nginx/nginx.template
CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
COPY --from=build /app/build /usr/share/nginx/html

