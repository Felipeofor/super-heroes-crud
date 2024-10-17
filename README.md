![image](https://github.com/user-attachments/assets/ced05a03-05ad-4b10-8cdb-4143a9bd4a12)
![image](https://github.com/user-attachments/assets/d2f46540-5c4d-4bd3-aaae-b5c788f088da)
![image](https://github.com/user-attachments/assets/ed404f7a-ffcd-46ea-bff9-1e36dbf2caf9)
![image](https://github.com/user-attachments/assets/3eac6100-9101-475f-ae69-9e01a29818de)


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

- **Pantallas Responsivas**: Se implemento medias querys en las pantallas login y singup.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Felipeofor/super-heroes-crud.git

2. Navega a la carpeta del proyecto:
    cd super-hero-app

3. Instala las dependencias:
    npm install

4. Inicia el servidor de json-server:
    json-server --watch src/db.json

5. Inicia la aplicación Angular:
    ng serve -o

## Test Unitarios - Karma y Jasmine

Se han implementado tests unitarios para garantizar la correcta funcionalidad del componente `HeroesTableComponent`. Estos tests verifican las siguientes características:

- **Creación del Componente**: Validación de que el componente `HeroesTableComponent` se crea correctamente.

- **Carga Inicial de Datos**: Comprobación de que los superhéroes se cargan al inicializar el componente utilizando el servicio `SuperHeroService`.

- **Filtrado de Superhéroes**: Verificación de que el filtro de búsqueda funciona correctamente.

- **Creación de Superhéroe**: Verificación de que un nuevo superhéroe se añade correctamente.

- **Eliminación de Superhéroe**: Validación de que el superhéroe seleccionado se elimina correctamente.

### Ejecución de los Tests

Para ejecutar los tests unitarios, sigue los siguientes pasos:

1. Asegúrate de que todas las dependencias estén instaladas ejecutando:
   
   ```bash
   npm install

2. Ejecuta el comando para ejecutar los tests con Karma y Jasmine:

    ng test

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
