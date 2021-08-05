# Stage 1 - build
FROM node as build
WORKDIR /workspace/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - production environment
FROM nginx:1.12-alpine
COPY --from=build-deps /workspace/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]