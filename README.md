# Índice del Proyecto
## Contribuidores
 - Juan Diego Huamani Vilca
 - Ricardo Alexander Rodriguez Pumacayo
 - Aroni Jarata Antony

## [Trello](https://trello.com/b/lLkk7xVC/proyecto-ingeneria-de-software)

## Librerías
### [auth](src/lib/auth.js)
  - **Descripción:** El código exporta un objeto que contiene una función llamada isLoggedIn. Esta función se utiliza como middleware en una aplicación Node.js con Express y Passport.js para verificar si un usuario está autenticado antes de permitir el acceso a rutas protegidas. Si el usuario está autenticado, la función llama a next() para continuar con la ejecución de la siguiente función en la cadena de middleware. Si el usuario no está autenticado, redirige al usuario a la página de inicio de sesión.

  - **Estilo de Programación:** El código sigue un estilo de programación simple y conciso. La estructura de control if se utiliza para verificar la autenticación del usuario, y las llamadas a funciones están limpiamente organizadas.

  - **Legibilidad:** El código es fácilmente legible debido a la elección de nombres descriptivos para las variables y funciones. La lógica de autenticación está claramente expresada, lo que facilita la comprensión.
    
  - **Principio SOLID:** En este contexto específico, el código se adhiere principalmente al principio de Responsabilidad Única. La función isLoggedIn tiene una responsabilidad única y clara: verificar la autenticación del usuario antes de permitir el acceso a rutas protegidas.

## [handlebars](src/lib/handlebars.js)
  - **Descripción:** El código importa la función format del paquete "timeago.js". Luego, define un objeto llamado helpers que contendrá funciones de ayuda. La función timeago dentro del objeto helpers toma una marca de tiempo (timestamp) como argumento y la formatea utilizando la función importada format del paquete "timeago.js".

  - **Estilo de Programación:** El código utiliza una estructura simple y directa. La función timeago está claramente nombrada y su propósito es evidente.

  - **Codificación Legible:** La legibilidad del código es buena. Las variables y funciones están nombradas de manera descriptiva, lo que facilita la comprensión de su funcionalidad. El uso de una función externa (format de "timeago.js") también contribuye a la legibilidad.

  - **Principio SOLID:** En este caso, el código muestra adhesión principalmente al principio de Responsabilidad Única. La función timeago tiene una única responsabilidad, que es formatear una marca de tiempo en un formato de tiempo pasado ("time ago").

### [helpers](src/lib/helpers.js)
- **Descripción:** El código importa el módulo bcryptjs para manejar el cifrado de contraseñas. Luego, define un objeto llamado helpers que contendrá funciones de ayuda relacionadas con la encriptación y verificación de contraseñas. La función encryptPassword toma una contraseña como argumento, genera un "salt" usando bcryptjs.genSalt y luego cifra la contraseña usando bcryptjs.hash, devolviendo la contraseña cifrada. La función matchPassword compara una contraseña dada con una contraseña cifrada guardada y devuelve un valor booleano que indica si coinciden.

- **Estilo de Programación:** El código sigue un estilo de programación claro y conciso. Las funciones están nombradas de manera descriptiva y su propósito es evidente.

- **Codificación Legible:** La legibilidad del código es buena. Las funciones están organizadas de manera coherente y los nombres de las funciones y variables son descriptivos. El uso de async/await contribuye a una legibilidad más clara en las operaciones asincrónicas.

- **Principio SOLID:** Este código muestra adhesión principalmente al principio de Responsabilidad Única. Cada función tiene una única responsabilidad clara: encryptPassword para cifrar contraseñas y matchPassword para comparar contraseñas.
  
## [passport](src/lib/passport.js)
- **Descripción:** El código configura Passport.js para manejar la autenticación local utilizando las estrategias de local.signin y local.signup. Se importa el módulo passport y la estrategia LocalStrategy de passport-local. Luego, se configuran las estrategias de autenticación y serialización/deserialización de usuarios.

- **Estilo de Programación:** El código está bien estructurado y utiliza una serie de funciones y callbacks para manejar la lógica de autenticación. La separación de las estrategias local.signin y local.signup hace que el código sea más modular.

- **Codificación Legible:** El código es legible gracias a los nombres de variables y funciones descriptivos. La estructura de control es clara y está organizada en bloques que hacen que la lógica sea fácil de seguir.

- **Principio SOLID:** El código se adhiere principalmente al principio de Responsabilidad Única. Cada función tiene una responsabilidad específica: local.signin maneja la autenticación de inicio de sesión, local.signup maneja el proceso de registro y las funciones de serialización/deserialización manejan la gestión de sesiones de usuario.

## Carpeta Public
### [public](src/public/css/styles.css)
- **Descripción:** El código define estilos CSS para diferentes elementos de una página web. Incluye estilos para el fondo del cuerpo, la barra de navegación, la sección de encabezado ("masthead") y las conferencias en la página.

- **Estilo de Programación:** El estilo de programación es claro y bien estructurado. Los estilos están agrupados por elementos relacionados, lo que facilita su identificación y mantenimiento.

- **Legibilidad:** Los nombres de las clases y las propiedades CSS son descriptivos, lo que hace que el código sea fácil de entender. La estructura general del archivo es ordenada y utiliza sangrías y espaciado adecuados para mejorar la legibilidad.

## Rutas
### [authentication](src/routes/authentication.js)
- **Descripción:** El código define un controlador de rutas para las funcionalidades de registro, inicio de sesión, cierre de sesión y visualización de perfil de usuario. Se utiliza Passport.js para la autenticación y se importan las funciones de ayuda de autenticación desde ../lib/auth.

- **Estilo de Programación:** El código sigue un estilo de programación orientado a clases y utiliza una clase AuthController para organizar las diferentes acciones relacionadas con la autenticación. Cada acción está definida como un método en la clase.

- **Legibilidad:** El código es legible y fácil de entender debido a su estructura organizada y al uso de nombres descriptivos para los métodos y rutas. Los comentarios proporcionan contexto adicional sobre las acciones que se están realizando.

- **Principio SOLID:** El código sigue el principio de Responsabilidad Única al agrupar acciones relacionadas con la autenticación en la clase AuthController. Cada método de la clase tiene una única responsabilidad.

### [index](src/routes/index.js)
- **Descripción:** El código define un enrutador utilizando Express que maneja la ruta principal ("/"). Cuando se accede a esta ruta mediante una solicitud GET, el enrutador renderiza la vista llamada "index".

- **Estilo de Programación:** El código sigue un estilo de programación simple y directo. Define una ruta y proporciona una única función de manejo para esa ruta.

- **Legibilidad:** El código es legible debido a su simplicidad. La ruta y la función de manejo están claramente definidas. El uso de una sola función para renderizar la vista hace que el código sea fácil de entender.

### [links](src/routes/links.js)
- **Descripción:** El código define un controlador de rutas utilizando Express que maneja diversas acciones relacionadas con la gestión de enlaces. Las acciones incluyen agregar, guardar, obtener, eliminar, editar y actualizar enlaces en la base de datos.

- **Estilo de Programación:** El código sigue un estilo de programación orientado a clases. Cada acción está definida como un método en la clase LinkController, lo que facilita la organización y mantenimiento del código.

- **Legibilidad:** El código es legible debido a su organización en métodos específicos para cada acción. Los nombres de métodos y variables son descriptivos, y la estructura de control es coherente.

- **Principio SOLID:** El código se adhiere principalmente al principio de Responsabilidad Única. Cada método en la clase LinkController tiene una responsabilidad única y está relacionado con una acción específica de gestión de enlaces.

## Vistas
### [auth](src/views/auth.js)
- **Descripción:** El fragmento de código proporcionado corresponde a una sección de una página web que implementa un formulario de inicio de sesión (SignIn). Este formulario permite a los usuarios ingresar sus credenciales de usuario para acceder a la plataforma. La implementación del formulario se beneficia de la biblioteca de diseño Bootstrap para lograr una apariencia visual atractiva y responsiva, lo que contribuye a una experiencia de usuario mejorada.

- **Estilo de Programación:** El código hace uso de la biblioteca Bootstrap para la presentación visual del formulario. Este enfoque en el diseño de interfaz de usuario refleja un enfoque moderno en el desarrollo web, donde se separan las preocupaciones de estilo y presentación del código de lógica subyacente. Al aprovechar las clases CSS predefinidas de Bootstrap, se promueve la reutilización de estilos y la coherencia visual en toda la aplicación. Este estilo de programación modularizado también facilita la colaboración entre desarrolladores y permite una iteración rápida en la apariencia del formulario.

- **Codificación Legible:** El código se presenta de manera organizada y estructurada. Se utilizan sangrías y etiquetas HTML correctamente formateadas, lo que mejora significativamente su legibilidad. Los nombres de clases y atributos son descriptivos, lo que ayuda a comprender rápidamente la función y el propósito de cada elemento. Además, la jerarquía de anidación se maneja de manera coherente, lo que facilita el seguimiento de la estructura del formulario. Esta atención a la codificación legible es esencial para el mantenimiento a largo plazo, la reducción de errores y la colaboración eficaz entre miembros del equipo.

### [layouts](src/views/layouts/main.hbs)
- **Descripción:** Este código es la estructura básica de una página HTML para una aplicación web de enlaces. Incorpora enlaces a fuentes de Google Fonts, estilos Bootstrap y CSS personalizados, así como también carga de scripts para jQuery, Bootstrap, y Font Awesome.

- **Estilo de Programación:** El código hace uso de varias fuentes externas, como Google Fonts, Bootstrap, jQuery y Font Awesome, para dar estilo, interactividad y tipografía a la aplicación. La modularidad se refleja en la inclusión de componentes como navegación y mensajes mediante las referencias {{> navigation }} y {{> message }}. El uso de enlaces externos para estilos y scripts muestra un enfoque en la reutilización de recursos y módulos, lo cual es común en el desarrollo web.

- **Codificación Legible:** El código demuestra una organización clara al utilizar etiquetas HTML bien estructuradas. Los enlaces a fuentes y estilos externos están bien documentados y facilitan la comprensión de los recursos utilizados. Además, las referencias a componentes reutilizables como {{> navigation }} y {{> message }} son indicios de una codificación modular y legible, lo que simplifica el mantenimiento y la colaboración.
  
### [links](src/views/links)
- **Descripción:** Este fragmento de código corresponde a una sección de una página web que muestra una lista de enlaces. Utiliza una estructura de rejilla de Bootstrap para organizar los enlaces en filas y columnas. Utiliza un bucle each para iterar a través de la lista de enlaces y generar tarjetas con detalles para cada enlace. Si no hay enlaces disponibles, muestra un mensaje al usuario para crear nuevos enlaces.

- **Estilo de Programación:** El código aprovecha la flexibilidad de Bootstrap para diseñar una presentación visual atractiva de los enlaces. Utiliza un enfoque orientado a componentes al generar tarjetas individuales para cada enlace, lo que facilita la reutilización y la coherencia en la apariencia de los elementos. La utilización del bucle each demuestra un enfoque en la generación dinámica de contenido basado en datos, lo cual es una práctica común en la programación web.

- **Codificación Legible:*** El código mantiene una estructura organizada con sangrías y un uso adecuado de las etiquetas HTML y de Handlebars (supongo que se está utilizando Handlebars como motor de plantillas). Los nombres de las clases y los atributos son descriptivos, lo que facilita la comprensión de la funcionalidad de cada elemento. El uso de comentarios como {{#each links}} y {{else}} proporciona claridad sobre la lógica de control de flujo utilizada en la plantilla. La codificación modular y legible es esencial para el mantenimiento y la escalabilidad del código.
  
### [partials](src/views/partials)
- **Descripción:** Este bloque de código representa la barra de navegación (navbar) de una página web, diseñada con un esquema de colores oscuros utilizando Bootstrap. La barra de navegación incluye enlaces a diferentes secciones de la aplicación web, como eventos, perfil, inicio de sesión y registro de usuario. Se adapta según si el usuario ha iniciado sesión o no, mostrando opciones adecuadas en consecuencia.

- **Estilo de Programación:** El código utiliza las clases de Bootstrap para definir la estructura y apariencia de la barra de navegación. Hace uso de características como el colapso de menú para dispositivos móviles y la creación de menús desplegables. La estructura de control de flujo {{#if user}} ... {{else}} ... {{/if}} permite mostrar opciones específicas de navegación según el estado del usuario, lo que refleja una adaptación dinámica de la interfaz.

- **Codificación Legible:** El código mantiene una estructura organizada y utiliza nombres de clases descriptivos de Bootstrap. Los enlaces están etiquetados con nombres significativos, como "Choose your Event", "Profile", "Logout", etc., lo que mejora la comprensión del propósito de cada enlace. El uso de comentarios para describir la lógica de control de flujo proporciona claridad en la implementación. En general, la legibilidad se mantiene, lo que contribuye a un mantenimiento eficiente y colaboración efectiva en el desarrollo.
  
### [index](src/views/index.js)
- **Descripción:** Este fragmento de código representa la cabecera (header) de una página web, diseñada con una imagen de fondo superpuesta por un div de contenido centrado. La cabecera incluye un título, un subtitulo y un botón para animar a los usuarios a comenzar una acción, en este caso, iniciar sesión.
### [profile](src/views/profile.js)
- **Descripción:** Este bloque de código representa un panel de control para un usuario autenticado en una aplicación web. El panel incluye información personal del usuario, como nombre completo y nombre de usuario, así como enlaces para acceder a sus eventos, agregar nuevos eventos y cerrar sesión.

- **Estilo de Programación:** El código utiliza la estructura de contenedor y columnas de Bootstrap para organizar los elementos en una disposición visualmente agradable. Las clases de Bootstrap "card" y "card-body" se utilizan para crear un diseño de tarjeta que rodea el contenido. Las clases de estilo de botón, como "btn btn-primary" y "btn btn-info", se aplican para dar formato a los botones con colores y estilos predefinidos.
  
## Base de Datos
### [database](src/database.js)
- **Descripción:** Este fragmento de código corresponde a la configuración y conexión a una base de datos MySQL en una aplicación Node.js. Establece una conexión a la base de datos utilizando el módulo mysql y crea un grupo de conexiones utilizando createPool para manejar conexiones concurrentes de manera eficiente. También promisifica las consultas a la base de datos para permitir el uso de promesas en lugar de callbacks.

- **Estilo de Programación:** El código sigue el patrón de diseño de programación asíncrona de Node.js utilizando callbacks y promesas. Utiliza el paquete promisify para convertir funciones basadas en callbacks en funciones basadas en promesas, lo que facilita la lógica asincrónica y mejora la legibilidad.

- **Codificación Legible:** El código mantiene una estructura organizada y utiliza nombres de variables y funciones descriptivos, lo que facilita la comprensión del propósito de cada elemento. Los comentarios explicativos en los condicionales de manejo de errores proporcionan claridad sobre los posibles problemas de conexión a la base de datos. La emisión de mensajes de error en caso de problemas de conexión también contribuye a una detección temprana de problemas.

## Archivos Principales
### [index](src/index.js)
- **Descripción:** Este fragmento de código representa la configuración principal de una aplicación web construida con el framework Express.js. Define la configuración de la aplicación, configura middlewares, establece rutas, define variables globales y arranca el servidor.

- **Estilo de Programación:** El código utiliza el patrón middleware de Express.js para organizar y gestionar las solicitudes HTTP. Requiere y utiliza diversos paquetes y librerías (como express, morgan, express-handlebars, etc.) para implementar funcionalidades como manejo de sesiones, autenticación, plantillas de vistas, manejo de rutas y más.

- **Codificación Legible:** El código mantiene una estructura organizada con secciones claramente identificadas (inicializaciones, settings, middlewares, rutas, etc.). Utiliza nombres de variables y funciones descriptivos y emplea comentarios para explicar el propósito y el funcionamiento de diferentes partes del código. La creación de variables globales mediante app.locals es especialmente útil para compartir información en toda la aplicación.
  
### [keys](src/keys.js)
- **Descripción:** Este fragmento de código exporta un objeto de configuración que contiene los detalles de conexión a una base de datos MySQL. Incluye información como el host de la base de datos, el usuario, la contraseña y el nombre de la base de datos a la que se conectará la aplicación.

- **Estilo de Programación:** El código utiliza un enfoque modular para exportar un objeto con la configuración de la base de datos. Al separar esta configuración en un archivo aparte, se sigue el principio de separación de preocupaciones y facilita la gestión de la configuración de la base de datos en un solo lugar.

- **Codificación Legible:** El código es claro y directo, con nombres de propiedades que describen claramente su propósito (por ejemplo, "host", "user", "password", "database"). Las credenciales de acceso a la base de datos (nombre de usuario y contraseña) se almacenan como cadenas de caracteres, y la información se proporciona en un formato fácilmente comprensible.
