FROM nginx:alpine

MAINTAINER TestingXperts

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY dist/* .
