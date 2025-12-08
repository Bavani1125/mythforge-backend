# Use official Node LTS 
FROM node:20 
WORKDIR /app 
COPY package*.json ./ 
RUN npm install --production 
COPY . . 
EXPOSE 8080 
ENV PORT=8080 
CMD ["npm","start"] 
