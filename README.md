# 🏍 Gestión de Repuestos para Motos

Este proyecto es una aplicación web simple desarrollada en HTML, CSS y JavaScript que permite gestionar un inventario de repuestos para motos.

## 🎯 Objetivo

Facilitar el registro, gestión y visualización de repuestos de motos mediante una interfaz intuitiva que permite llevar un control básico de nombre, categoría y precio de cada producto.

## 🛠 Tecnologías Utilizadas

- *HTML5* – Estructura de la interfaz  
- *CSS3* – Estilos personalizados  
- *JavaScript* – Lógica de funcionamiento e interacción  
- *localStorage* – Almacenamiento de datos en el navegador  

## 🧠 Enfoque del Proyecto

- Arquitectura *MVC* (Modelo – Vista – Controlador) para una estructura limpia y mantenible.  
- Desarrollo *incremental* con funcionalidades CRUD: crear, visualizar, editar y eliminar repuestos.  
- Preparado para la *escalabilidad*, con posibilidad de integrar módulos futuros como autenticación, alertas, informes y conexión a base de datos.  
- Uso de *Git* como herramienta de control de versiones para facilitar la colaboración y el seguimiento del desarrollo.  

---

## ✨ Funcionalidades

- Registro de repuestos con campos:
  - Nombre del repuesto  
  - Categoría (seleccionable mediante lista desplegable)  
  - Precio  
- Validación para evitar el registro de repuestos duplicados  
- Visualización en tabla de todos los repuestos registrados  
- Contador dinámico de repuestos totales  
- Posibilidad de editar y eliminar repuestos existentes  
- Icono representativo junto al título principal  
- Persistencia de datos utilizando localStorage del navegador  

---

## 🧠 Funcionalidades nuevas implementadas

### 📌 Registro de historial de acciones

Ahora el sistema incluye una sección visual llamada *"Registro de Actividades"*, donde se listan acciones realizadas como:

- Guardar un repuesto
- Editar un repuesto
- Eliminar un repuesto

Cada evento se muestra con un texto descriptivo en la parte inferior de la interfaz.

### 🔁 Patrón Singleton aplicado

El historial de actividades se gestiona usando el *patrón de diseño Singleton*, implementado en el archivo HistorialRepuestos.js, dentro de la carpeta singleton_ssandobal/.  
Este patrón garantiza que solo exista una instancia del historial durante toda la ejecución de la app, lo que permite un acceso y control centralizado de todos los eventos del sistema.

---

## 🔧 Cómo usar el proyecto

1. Abre el archivo index.html en cualquier navegador.  
2. Rellena los campos del formulario para agregar un nuevo repuesto.  
3. El repuesto aparecerá automáticamente en la tabla inferior.  
4. Las acciones realizadas se mostrarán en el historial de actividades.  
5. Los datos se guardan en el navegador y se mantienen entre sesiones.  

## 📌 Notas adicionales

- No es necesario instalar software adicional.  
- Los datos se almacenan únicamente en el navegador local (sin conexión a servidor).  
- Ideal para demostraciones, prácticas o tareas educativas.  

---

## 👩‍💻 Autor

- *Nombre:* Sulay Sandobal Ricardo  
- *Fecha:* Agosto de 2025  
- *Materia:* Ingeniería de Software II
- Versión: 2.0 Implementación del patrón Singleton y mejoras finales
  

¡Gracias por revisar este proyecto actualizado!
