FROM node:20.14 AS front-builder

WORKDIR /opt/front
ADD ./package.json /opt/front
ADD ./package-lock.json /opt/front
RUN npm ci
COPY ./ /opt/front
RUN npm run build:prod

FROM nginx:1.13-alpine
RUN mkdir -p /var/www
ADD ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=front-builder /opt/front/static /var/www
ADD ./docker/version /opt
ADD ./docker/revision /opt
EXPOSE 80
