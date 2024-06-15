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

Используем базовый образ Node.js
FROM node:20.14

# Создаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальной код
COPY . .

# Собираем приложение для production
RUN npm run build -- --configuration production

# Используем базовый образ для сервера nginx
FROM nginx:alpine

# Копируем билд приложения в корневую директорию nginx
ADD ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/dist/dentistry-kcdi /usr/share/nginx/html

# Экспонируем порт
EXPOSE 80

# Запуск nginx
CMD ["nginx", "-g", "daemon off;"]
