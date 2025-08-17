const API_URL = 'http://localhost/GestionRepuestosMots/backend.php';


// Obtener todos los repuestos desde MySQL
async function getProducts() {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log("Productos cargados:", data); // 👈 ver en consola navegador
    return data;
}


// Guardar o actualizar un repuesto
async function saveProduct(product) {
    let method = (product.id && product.id !== "" && !isNaN(product.id)) ? 'PUT' : 'POST';

    console.log("➡️ Enviando a backend:", method, product);

    const res = await fetch(API_URL, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: product.id ? parseInt(product.id) : null,
            nombre: product.nombre,
            categoria: product.categoria,
            precio: parseFloat(product.precio)
        })
    });

    let data;
    try {
        data = await res.json();
    } catch (e) {
        console.error("❌ No se pudo parsear la respuesta:", e);
        return { error: "Respuesta inválida del servidor" };
    }

    console.log("⬅️ Respuesta del backend:", data);
    return data;
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



