FROM node:18-alpine as build
WORKDIR /opt/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.21
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /opt/app/dist/habitio-landing /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
