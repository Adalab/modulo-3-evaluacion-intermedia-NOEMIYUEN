# Módulo 3: Ejercicio de evaluación intermedia

> Alumna: Noemí Ho Fa Yuen Durán

El ejercicio consiste en desarrollar una página web "sencilla" con React.

## Listado de Adalabers

Vamos a llevar la cuenta de las compañeras que somos en esta promo y a apuntar la especialidad de cada
una. Queremos crear una aplicación para gestionar alumnas de Adalab y.. ¡¡¡lo vamos a hacer con React!!!

A continuación detallamos lo que queremos hacer.

### 1º Pintar el listado de Adalabers

Para empezar el ejercicio queremos:

1. Pintar una cabecera con un título que ponga Adalabers.
2. Pintar el listado de Adalabers inicial. Para ello os facilitamos los datos en la siguiente API:
   https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/adalabers-v1/promo-radsajsd.json
   Os recomendamos que primero copiéis el contenido del API y los peguéis en un fichero json en
   vuestro proyecto. Más adelante os encargaréis del fetch(). De momento lo importáis en vuestro
   componente App y lo guardáis en el estado.
   Después, generar el HTML de la página con los datos que habéis importado del json. Recordad que
   las etiquetas para hacer tablas en HTML son:

Los elementos <table>, <thead> y <tbody> son fijos. La parte variable de la tabla son los <tr>
que se crean por cada elemento del array de datos dentro de la etiquteta <tbody> de la tabla. Esos

<tr> los debemos generar desde React.
Y cuando se vean todos los datos, nos ocuparemos del fetch para obtener los datos directamente del
API y no tenerlos "grabados a fuego" en el código fuente de nuestra aplicación.

### 2º Añadir a una nueva Adalaber

A continuación, queremos añadir los datos de una compañera nueva. Para ello seguiremos los siguientes
pasos:

1. Crear un formulario con los campos:
   Nombre de la compañera
   Nombre de su tutora
   Especialidad en la que destaca
   Un botón para Añadir una nueva Adalaber.
2. Cuando la usuaria pulse en el botón, hay que añadir la Adalaber al listado de alumnas para que ésta
   aparezca en la tabla.
   Te queremos dar unas pistas en forma de preguntas. Antes de que la usuaria pulse en el botón de "Añadir
   una nueva Adalaber" debes pensar:
   ¿Vas a guardar los datos del formulario en algún sitio?
   ¿En qué tipo de datos vas a guardar los valores de los <input>?
   ¿Qué valores iniciales tienen estos datos?
   ¿Qué eventos tendrá la página? ¿Qué hay que cambiar en las variables estado?

### 3º Filtrar el listado de Adalabers (BONUS)

A continuación queremos filtrar las alumnas por nombre y por tutora. Intenta hacer uno de los dos y,
cuando lo tengas controlado, implementa el restante (no hace falta que estén los dos filtros).
Para filtrar por nombre:

1. Añade un recuadro sobre la tabla del listado de alumnas donde la usuaria pueda escribir texto.
2. Añade la funcionalidad para que, cuando la usuaria escriba en ese <input>, el listado de Adalabers
   se re-pinte mostrando solo las que su nombre incluya el texto que ha escrito la usuaria (aplicando
   también el filtrado por tutora, si ya lo tuvieras implementado).
   Para filtrar por tutora:
3. Añade un <select> a la cabecera que tenga las siguientes opciones:
   Cualquiera (es la opción por defecto)
   Yanelis
   Dayana
   Iván
4. Añade la funcionalidad para que, cuando la usuaria cambie ese <select>, el listado de Adalabers se
   re-pinte mostrando solo las que coincidan con la opción seleccionada (aplicando también el filtrado
   por nombre, si procede).
   Más pistas, esta vez sobre ese <input> y ese <select>:
   ¿Vas a guardar los datos del select en algún sitio? ¿y del input?
   ¿Qué tipo de datos vas a guardar?
   ¿Qué valor inicial le vas a poner?
   Y siempre que filtramos algo debemos hacernos las siguientes preguntas:
   ¿Qué datos de cada Adalaber debo usar en cada filtro?
   ¿Qué datos de cada Adalaber tienes que comparar con la opción seleccionada por la usuaria para
   saber si una Adalaber cumple o no con el filtro?
   ¿Hay alguna opción del select con la que deba mostrar todas las Adalabers?
   ¿Hay alguna opción del select con la que no deba mostrar ninguna Adalaber?
   ¿Debo guardar las Adalabers flitradas en algún sitio o puedo calcularlas con JavaScript antes de
   ponerlas el el HTML?

### 4º Mostrar redes sociales (BONUS)

Después de pintar el listado, podemos intentar pintar una columna más en nuestra tabla con enlaces a las
redes sociales que tiene cada Adalaber. Puedes guiarte con los siguientes pasos:
enunciado.md 28/11/2022
7 / 7

1. Añade una columna más en la cabecera de la tabla.
2. Añade una celda más a cada fila.
3. El contenido de la celda extra de cada fila serán los nombres de las redes sociales de cada Adalaber.
   Puede ser que no tenga ninguna o puede ser que tenga hasta 3.
4. Añade un enlace <a> al nombre de la red social que abra la URL (o dirección) de la misma.
   Y ya que estamos también te damos unas pistas:
   ¿Cómo están almacenados los datos de las redes sociales de cada Adalaber?
   ¿Cómo podemos recorrer todos los datos de las redes sociales para generar su HTML? ¿Hemos hecho
   algo parecido en este proyecto antes?
   ¿Dónde debo incluir ese código que genera el HTML de la lista de redes sociales? Recuerda que este
   código hay que usarlo para cada Adalaber.

### 5º Obtén los datos desde el API con un fetch (BONUS)

Implementa la funcionalidad de traer los datos desde el servidor cuando se cargue la página. Sólo debe
pedir los datos al cargar/refrescar la página y no cuando creamos una nueva adalaber o cuando usamos
algún filtro.

### 6º Maqueta a tu gusto (BONUS)

No te vamos a decir cómo debes poner bonita tu web porque tienes más estilo y flow que nosotras.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
