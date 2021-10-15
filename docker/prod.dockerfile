
FROM node:latest

    COPY ../ /desk/bot
    WORKDIR /desk/bot

    # VARIABLES
    ENV PORT=3000

    RUN npm install
    ENTRYPOINT [ "npm", "run", "start:dev" ]

    EXPOSE $PORT
    