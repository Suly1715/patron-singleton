const API_URL = 'http://localhost/GestionRepuestosMots/index.html';

// Obtener todos los repuestos desde MySQL
async function getProducts() {
    const res = await fetch(API_URL);
    return await res.json();
}

// Guardar o actualizar un repuesto
async function saveProduct(product) {
    let method = product.id ? 'PUT' : 'POST';

    const res = await fetch(API_URL, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: product.id,
            nombre: product.name,
            categoria: product.category,
            precio: parseFloat(product.price)
        })
    });

    return await res.json();
}

// Eliminar un repuesto
async function deleteProduct(id) {
    const res = await fetch(API_URL, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
    });
    return await res.json();
}

// Buscar un repuesto por ID
async function findProductById(id) {
    const products = await getProducts();
    return products.find(p => p.id == id);
}



