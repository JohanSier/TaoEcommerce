FROM node:18-alpine

WORKDIR /app

# Copiar solo los archivos necesarios para la instalación
COPY package*.json ./

# Instalar dependencias
RUN npm ci --only=production

# Copiar el código del servidor
COPY server.js ./

# Configurar variables de entorno
ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"] 