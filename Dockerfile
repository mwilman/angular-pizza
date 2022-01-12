# Stage 1
FROM node:lts-alpine3.14 as build-step
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
COPY nginx.conf /etc/nginx
COPY package.json /usr/local/app/
#COPY nginx.conf /usr/share/nginx/conf
RUN npm install
RUN npm run build --prod

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build-step /usr/local/app/dist/pizza-angular /usr/share/nginx/html

# Expose port 80
EXPOSE 80
