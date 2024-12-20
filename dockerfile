#usa una imagen base oficial de node.js
FROM node:18

#directorio de trabajo en el contenedor
WORKDIR /usr/src/app

#copiar el package.json y package-lock.json al contenedor
COPY package*.json ./

#instalar las dependencias
RUN npm install

#copiar todo el codigo del proyecto al contenedor
COPY . .

#exponer el puerto
EXPOSE 3000

#comando para ejecutar la aplicacion
CMD ["npm", "start"]
