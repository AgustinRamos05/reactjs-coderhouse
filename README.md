# Documentacion de la App

 Este proyecto simula un e-commer de iphone, en donde el usuario puede elegir un producto ya sea iphone o ipad, seleccionar una cantidad, enviarlo al carrito y luego efectuar la compra. 

## Uso e Instalacion

Para poder utilizar este codigo debemos principalmente tener React.js instalado en el directorio. Para ello debemos seguir los siguients pasos:

1) Descargar la ultima version de Node.js ingresando a [https://nodejs.org/en/](https://nodejs.org/en/) y ejecutar el archivo descargado hasta su instalacion.
2) Abrir la consola (ya sea de Git, Windows Terminal, etc.) para crear la App mediante CLI (interfaz de línea de comandos).
3) Ubicarnos en un directorio especifico en donde querramos instalar React utilizando el comando cd.
4) Una vez parado sobre el directorio deseado debemos ejecutar el comando `npm install -g create-react-app` y asi tenemos instalado React.

Para ejecutar la aplicación y poder acceder desde el navegador debemos ejecutar (dentro del directorio de la aplicación creada) el comando `npm start`.

Una vez instalado React en nuestro directorio debemos instalar loas siguientes librerias:
 * Sass utilizando el comando `npm install sass`en la consola de la aplicacion.
 * React-router-dom utilizando el comando `npm install react-router-dom`en la consola de la aplicacion.
 * Firebase utilizando el comando `npm install firebase`en la consola de la aplicacion.
 
Por ultimo, para poder utilizar este repositorio se necesita clonar el mismo mediante este comando en su consola:

 `$ git clone https://github.com/AgustinRamos05/reactjs-coderhouse `

## Tecnologias utilizadas

Se utilizaron las siguientes tecnologias:

* React : Para facilitar la creación de componentes interactivos, reutilizables, para interfaces de usuario.
* Firebase : Para generar una base de datos mediante FireStore en donde almacenamos en distintas colecciones nuestros productos y detalles de ventas.
* React-router-dom : Para generar diferentes rutas y darle una mejor navegabilidad al sitio web.
* sass: Para una mejor maquetacion de nuestro codigo css, y asi darle forma al front y lograr captar la atencion del usuario.
