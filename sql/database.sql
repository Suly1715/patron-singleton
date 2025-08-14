-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS gestion_repuestos;
USE gestion_repuestos;

-- Crear la tabla repuestos
CREATE TABLE IF NOT EXISTS repuestos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
