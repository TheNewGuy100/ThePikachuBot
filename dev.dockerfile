FROM node:16.1.0

    COPY . .

    ENTRYPOINT [ "npm", "run", "start" ]
    