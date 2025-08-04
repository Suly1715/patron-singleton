# 🧠 Patrón Singleton - Proyecto de Gestión de Repuestos

## 🔷 ¿En qué consiste el patrón Singleton?

El patrón Singleton es un patrón de diseño que garantiza que una clase solo tenga **una única instancia** durante toda la ejecución del programa, y proporciona un punto de acceso global a dicha instancia.

Es útil cuando necesitamos controlar un recurso centralizado, como un historial, una configuración global o una conexión única.

---

## 🔧 ¿Cómo lo implementé?

En este proyecto, el patrón Singleton se implementó en el archivo `HistorialRepuestos.js`, ubicado dentro de la carpeta `singleton_ssandobal/`.

Allí se define una clase `HistorialRepuestos` con un método estático llamado `obtenerInstancia()` que asegura que siempre se retorne la **misma instancia**. Esta clase maneja internamente una lista de eventos que el usuario va generando al guardar o eliminar repuestos.

---

## ⚙️ ¿Qué hace el ejemplo?

El sistema permite:

- Registrar, editar y eliminar repuestos de motocicletas.
- Cada acción (como guardar o eliminar un repuesto) se registra en un **historial de eventos**, el cual se muestra en pantalla.
- Este historial es gestionado **usando el patrón Singleton**, lo que garantiza que **todos los módulos del sistema acceden al mismo historial compartido**.

---

✅ Con esta implementación, el patrón Singleton demuestra cómo mantener un registro consistente de acciones en una aplicación de tipo CRUD, aplicando buenas prácticas de desarrollo web.

