FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# EXPOSE 5173

# CMD ["npm", "run","dev"]
# Use nginx to serve the built React app
FROM nginx:alpine

# Copy the build files to the nginx server
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]