```
Trabaje en la construcción del home principal de una tienda virtual con los siguientes componentes:

1- Cabecera: incluye logo, menu y carrito
2- Contenedor principal con container que deja espacios a los costados para la version desktop.
3- Banner grafico.
4- Zona de filtros: puede estar horizontalmente o en una columna a la izquierda.
- Filtros a realizar: - Por categoria - Por rango de precio
5-  Zona de busqueda: puede estar horizontalmente, o dentro de la zona de filtros. Permite escribir un texto y buscar artículos coincidentes.
6- Zona de tarjetas: visualización de filas de tarjetas y un paginador
7- Paginador: ubicado horizontalmente luego de la zona de tarjetas, permite moverse por las paginas de productos.
8- Pie de pagina. Se puede replicar parte del menu, logo, redes sociales, etc.
9- Icono flotante para contacto por whatsapp.
Taildwinds componentes:
https://tailwindui.com/?ref=top

Material UI:
https://mui.com/material-ui/getting-started/installation/

**************************************************************************************************************************************************************
Implemente una interfaz en React que permite realizar operaciones de CRUD (Crear, Leer, Actualizar, Eliminar) sobre una tabla de productos.

Funcionalidades:
Mostrar un listado de productos con opciones para editar y eliminar.
Crear un nuevo producto.
Editar un producto existente.
Eliminar un producto.
Configuración:
Se utilizará para este fin, la sección admin del proyecto.
1)
Crear componente que haga una llamada a la API para obtener la lista de productos.
Mostrar los productos en una tabla con dos íconos de acción (editar y borrar) en cada fila.
2)
Crear en otra ruta del front, un formulario que permita agregar o editar un nuevo producto, en dependencia del parametro enviado por url. Si se envia un ID, se edita el produto. Si se envia ID=new, se crea un nuevo producto
3)
Reutilizar el formulario para editar un producto existente, precargando los datos en los campos correspondientes.
4)
Implementar validaciones básicas en el formulario (e.g., campos requeridos).
Los campos utilizados (inputs, select, etc.) se controlaran con variables de estado (useState)
5)
Implementar la funcionalidad para eliminar un producto mediante un ícono en la tabla de productos.
Mostrar un diálogo de confirmación antes de eliminar un producto.
6)
Asegurarse de que las operaciones de CRUD estén completamente integradas con la API backend creada en el Trabajo Práctico 1.
Usar Axios u otra librería para realizar las llamadas HTTP a la API.
Probar cada una de las funcionalidades (crear, leer, editar, eliminar) para asegurarse de que el flujo funciona correctamente.
7)
Documentar el código y las decisiones tomadas durante el desarrollo.
Subir el proyecto a un repositorio en GitHub e indicar la URL del mismo.
```
