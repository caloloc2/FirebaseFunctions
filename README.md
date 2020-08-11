# Pasos para creacion de Cloud Functions en Firebase y Realtime Database

# 1. Requisitos
Debe tener en el equipo instalado NodeJS y npm.

# 2. Configurar herramientas de Firebase
Ejecutar esta linea de comandos en la consola y dentro de la carpeta de desarrollo<br>
npm install -g firebase-tools

# 3. Loguearse en Firebase
Ejecutar la siguiente linea en la consola y se abrira el navegador para loguearse a Firebase<br>
firebase login

# 4. Crear proyecto de Firebase para Cloud Functions
Ejecutar el comando en la consola<br>
firebase init functions<br>
Seleccionar Javascript como lenguaje<br>
Seleccionar base de datos a ser usada

# 5. Programar archivo functions/index.js
En el archivo se debe programar las funciones a ser usadas.

# 6. Subir a Firebase las funciones desarrolladas
Ejecutar en consola.<br>
firebase deploy --only functions<br>
Luego de un tiempo debera subirse correctamente las funciones y pueden ser visibles desde la consola de Firebase.<br>
Al implementarlas ya se encuentran en uso.

# 7. Referencias
https://firebase.google.com/docs/functions/get-started
https://github.com/firebase/functions-samples/blob/master/quickstarts/uppercase/functions/index.js