FROM hanserf/node-webdev:latest
WORKDIR /usr/src/app
COPY . .
EXPOSE 3000
CMD ["nodejs", "app"]