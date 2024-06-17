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
COPY --from=front-builder /opt/front/dist/dentistry-kcdi/browser /var/www
EXPOSE 80

