# SuperHero Management App

## Descripción
La aplicación **SuperHero Management** es una solución web diseñada para gestionar y visualizar una lista de superhéroes de manera eficiente y amigable. Utilizando Angular para el frontend y `json-server` como backend simulado, la aplicación permite crear, editar y eliminar héroes, así como visualizarlos en una tabla ordenada por fecha.

## Características

- **Gestión de Superhéroes**: Permite crear, editar y eliminar superhéroes fácilmente mediante un diálogo interactivo.
  
- **Visualización de Datos**: Los superhéroes se muestran en una tabla, con la capacidad de paginar y ordenar la lista según la fecha de creación, desde el más nuevo al más viejo.

- **Uso de `json-server`**: Implementa `json-server` como un backend simulado, lo que facilita el desarrollo y las pruebas sin la necesidad de configurar un servidor real.

- **Interacción Fluida**: La aplicación utiliza **Angular Material** para ofrecer una interfaz moderna y responsiva. Los diálogos y formularios están diseñados para mejorar la experiencia del usuario.

- **Rutas**: Implementación de **rutas en Angular** para navegar entre diferentes vistas de la aplicación, permitiendo una experiencia más estructurada y coherente.

- **Servicios**: Utilización de **servicios Angular** para gestionar la lógica de negocio y las llamadas a la API, facilitando la comunicación con el backend y la separación de preocupaciones.

- **Validaciones de Formularios**: Implementación de **validaciones en formularios** utilizando `Reactive Forms` de Angular, garantizando que los datos ingresados por los usuarios sean válidos antes de ser enviados.

- **Suscripciones a Cambios**: Implementación de suscripciones para manejar la lógica después de crear o editar un superhéroe, actualizando la lista de héroes automáticamente.

- **Código Limpio y Modular**: Se ha organizado el código en componentes claros y reutilizables, facilitando el mantenimiento y la escalabilidad del proyecto.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Felipeofor/super-heroes-crud.git

2. Navega a la carpeta del proyecto:
    cd super-hero-management

3. Instala las dependencias:
    npm install

4. Inicia el servidor de json-server:
    json-server --watch src/db.json

5. Inicia la aplicación Angular:
    ng serve -o

## Tecnologías Utilizadas

- **Angular**: Framework para construir aplicaciones web de una sola página.

- **TypeScript**: Lenguaje utilizado para mejorar la legibilidad y mantenibilidad del código.

- **Angular Material**: Conjunto de componentes UI para una experiencia de usuario moderna y responsiva.

- **Rutas Angular**: Para la navegación entre diferentes componentes de la aplicación.

- **Reactive Forms**: Para la gestión y validación de formularios.

- **json-server**: Herramienta para crear APIs RESTful rápidamente utilizando un archivo JSON como base de datos.

## Agradecimientos

Agradezco la oportunidad de trabajar en este desafío y desarrollar esta aplicación. Espero que encuentres útil y entretenido el proyecto.

## Más Información

Si deseas ver más información sobre mis proyectos y trabajos, te invito a visitar mis repositorios en GitHub y mi perfil de LinkedIn: 

GitHub: https://github.com/Felipeofor
LinkedIn: https://www.linkedin.com/in/ramosfelipe-fullstack