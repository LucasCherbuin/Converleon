# Stage 1: Build the React app
FROM node:24 AS build
# Set the working directory
WORKDIR /Converleon
# Copy package.json and package-lock.json to install dependencies
COPY ./package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the app files
COPY . .
# Build the app
RUN npm run build
# Expose port 3000 for Nginx
EXPOSE 3000

CMD ["npm","start"]

# docker build -t converleon .
# docker run -it --rm converleon sh
# npm run start
#