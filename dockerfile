# build stage (has node + npm)
FROM node:22-alpine 

WORKDIR /converleon

COPY package.json  ./

COPY . .

RUN npm install --save-dev path-browserify
RUN npm update
RUN npm cache clean --force


EXPOSE 3000

CMD ["sh", "-c", "npm install && ng serve --host 0.0.0.0 --port 3000 --poll 2000"]

# docker build --no-cache --network=host -t converleon .
# docker run -it --rm converleon sh
# npm run start 
# npm run build
# lsS