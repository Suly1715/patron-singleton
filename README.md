# 🏍 Gestión de Repuestos para Motos

Este proyecto es una aplicación web simple desarrollada en **HTML**, **CSS**, **JavaScript** y **PHP** que permite gestionar un inventario de repuestos para motos, ahora con persistencia de datos en **MySQL**.

---

## 🎯 Objetivo

Facilitar el registro, gestión y visualización de repuestos de motos mediante una interfaz intuitiva que permite llevar un control básico de nombre, categoría y precio de cada producto, almacenando los datos en una base de datos para mayor seguridad y persistencia.

---

## 🛠 Tecnologías Utilizadas

- **HTML5** – Estructura de la interfaz  
- **CSS3** – Estilos personalizados  
- **JavaScript** – Lógica de funcionamiento e interacción en el frontend  
- **PHP** – Lógica de backend para conexión con base de datos  
- **MySQL** – Almacenamiento persistente de los datos  
- **Fetch API** – Comunicación asíncrona entre frontend y backend

---

## 🧠 Enfoque del Proyecto

- Arquitectura **MVC** (Modelo – Vista – Controlador) para una estructura limpia y mantenible.  
- Desarrollo incremental con funcionalidades **CRUD**: crear, visualizar, editar y eliminar repuestos.  
- Migración de **localStorage** a **MySQL** para almacenamiento permanente y seguro.  
- Preparado para la **escalabilidad**, con posibilidad de integrar módulos futuros como autenticación, alertas e informes.  
- Uso de **Git** como herramienta de control de versiones para facilitar la colaboración y el seguimiento del desarrollo.  

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
- Persistencia de datos utilizando **MySQL** en el servidor  

---

## 🧠 Funcionalidades nuevas implementadas

### 📌 Registro de historial de acciones
Ahora el sistema incluye una sección visual llamada **"Registro de Actividades"**, donde se listan acciones realizadas como:
- Guardar un repuesto
- Editar un repuesto
- Eliminar un repuesto

Cada evento se muestra con un texto descriptivo en la parte inferior de la interfaz.

### 🔁 Patrón Singleton aplicado
El historial de actividades se gestiona usando el patrón de diseño **Singleton**, implementado en el archivo `HistorialRepuestos.js`, dentro de la carpeta `singleton_ssandobal/`.  
Este patrón garantiza que solo exista una instancia del historial durante toda la ejecución de la app, lo que permite un acceso y control centralizado de todos los eventos del sistema.

---

## 🗄 Implementación de Base de Datos

La aplicación ahora se conecta a **MySQL** mediante **PHP** (`backend.php`), permitiendo un almacenamiento persistente y accesible desde cualquier dispositivo.  
La base de datos incluye una tabla `repuestos` con las siguientes columnas:

| Campo        | Tipo          | Descripción |
|--------------|--------------|-------------|
| id           | INT (PK, AI) | Identificador único |
| nombre       | VARCHAR(100) | Nombre del repuesto |
| categoria    | VARCHAR(50)  | Categoría del repuesto |
| precio       | DECIMAL(10,2)| Precio del repuesto |

---

## 🎨 Evaluación y Rediseño de la Interfaz

Con el objetivo de mejorar la claridad, interactividad y usabilidad del sistema, se realizó una evaluación de la interfaz actual y se implementaron mejoras basadas en principios de **diseño centrado en el usuario**.

### 📊 Criterios de Evaluación

| Criterio               | Cumple (Sí/Parcial/No) | Observaciones y mejoras |
|------------------------|-----------------------|-------------------------|
| **Claridad**           | Sí                    | La interfaz es clara, con etiquetas y campos identificables. |
| **Interactividad**     | Sí                    | Los botones cumplen su función de editar y eliminar. |
| **Retroalimentación visual** | Parcial               | Faltan efectos al pasar el cursor o confirmaciones visuales modernas. |
| **Flexibilidad**       | No                    | No cuenta con un diseño adaptable a distintos tamaños de pantalla. |
| **Consistencia visual**| Sí                    | Colores, tipografía y estructura coherentes en toda la interfaz. |
| **Estética**           | Parcial               | Diseño limpio, pero algunos colores podrían suavizarse para mayor armonía. |

---

## 🚀 Mejoras Implementadas

✅ Reorganización del formulario de registro para mejor lectura y uso.  
✅ Uso de iconos junto a etiquetas para identificar mejor las acciones.  
✅ Aplicación de una paleta de colores más armónica y moderna.  
✅ Agrupación visual de los módulos de Registro, Lista y Registro de Actividades.  
✅ Botones de acción con iconos de edición y eliminación más intuitivos.  
✅ Implementación de diseño responsivo para adaptarse a distintos tamaños de pantalla.  
✅ Migración a **MySQL** para almacenamiento persistente.  

---

## 📌 Conclusiones del Rediseño

El rediseño mejora significativamente la experiencia de usuario, incorporando iconografía clara, colores armónicos y separación visual de secciones para facilitar la comprensión y uso del sistema.  
Además, se integró un diseño totalmente responsivo y una conexión con base de datos MySQL, lo que permite que los datos sean persistentes y accesibles en cualquier momento.  
La retroalimentación visual se mejoró parcialmente, pero se recomienda seguir optimizándola con animaciones y efectos modernos para acciones clave.  

---

## 🔧 Cómo usar el proyecto

1. Clonar el repositorio en tu servidor local o hosting.  
2. Importar el archivo `sql/database.sql` en tu servidor MySQL para crear la base de datos y la tabla `repuestos`.  
3. Configurar las credenciales de conexión en `backend.php`.  
4. Abrir el archivo `index.html` en el navegador por ejemplo: http://localhost/NombreCarpeta/index.html.  
5. Registrar, editar o eliminar repuestos desde la interfaz; los cambios se reflejarán en la base de datos.  

---

## 📌 Notas adicionales

- Requiere un servidor local como **XAMPP**, **Laragon** o similar para funcionar correctamente.  
- Los datos ahora se almacenan en **MySQL**, por lo que no se perderán al cerrar el navegador.  
- Ideal para demostraciones, prácticas o tareas educativas con persistencia de datos.  

---

## 👩‍💻 Autor

- **Nombre:** Sulay Sandobal Ricardo  
- **Fecha:** Agosto de 2025  
- **Materia:** Ingeniería de Software II  

---

¡Gracias por revisar este proyecto actualizado con base de datos MySQL!

