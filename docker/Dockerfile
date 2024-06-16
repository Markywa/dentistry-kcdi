# FROM node:20.14 AS front-builder

# WORKDIR /app
# ADD ./package.json /opt/front
# ADD ./package-lock.json /opt/front
# RUN npm install
# COPY /app
# RUN npm run build -- --configuration production

# FROM nginx:1.13-alpine
# RUN mkdir -p /var/www
# ADD ./docker/nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=front-builder /opt/front/static /var/www
# ADD ./docker/version /opt
# # ADD ./docker/revision /opt
# EXPOSE 80

# Используем базовый образ Node.js
FROM node:20.14 AS front-builder
WORKDIR /opt/front
ADD ./package.json /opt/front
ADD ./package-lock.json /opt/front
RUN npm install
COPY ./ /opt/front
RUN npm run build -- --configuration production

# Используем базовый образ для сервера nginx
FROM nginx:alpine
RUN mkdir -p /var/www
ADD ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=front-builder /opt/front/static /var/www
EXPOSE 80

# Запуск nginx
# CMD ["nginx", "-g", "daemon off;"]
