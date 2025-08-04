// Selección de elementos del DOM
const form = document.getElementById('product-form');
const nameInput = document.getElementById('name');
const categoryInput = document.getElementById('category');
const priceInput = document.getElementById('price');
const idInput = document.getElementById('product-id');
const tableBody = document.getElementById('product-table-body');

// Escuchar el evento de envío del formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim().toLowerCase();
    const category = categoryInput.value.trim().toLowerCase();
    const price = parseFloat(priceInput.value).toFixed(2);
    const id = idInput.value;

    if (!name || !category || isNaN(price)) return;

    const products = getProducts();

    // Verifica si ya existe un repuesto con mismo nombre, categoría y precio
    const productoDuplicado = products.find(p =>
        p.id !== id &&
        p.name.trim().toLowerCase() === name &&
        p.category.trim().toLowerCase() === category &&
        parseFloat(p.price).toFixed(2) === price
    );

    if (productoDuplicado) {
        alert("Ya existe un repuesto con el mismo nombre, categoría y precio.");
        return;
    }

    const product = {
        id: id || Date.now().toString(),
        name: nameInput.value.trim(),
        category: categoryInput.value.trim(),
        price
    };

    saveProduct(product); 
    renderTable();
    form.reset();
    idInput.value = '';

    // Registrar en historial
    const historial = HistorialRepuestos.obtenerInstancia();
    historial.agregarEvento(`Repuesto "${product.name}" guardado o editado.`);
    mostrarHistorial();
});

// Cargar datos en formulario para edición
function editProduct(id) {
    const product = findProductById(id);
    if (!product) return;

    nameInput.value = product.name;
    categoryInput.value = product.category;
    priceInput.value = product.price;
    idInput.value = product.id;
}

// Renderizar tabla con repuestos
function renderTable() {
    const products = getProducts();
    tableBody.innerHTML = '';

    products.forEach(product => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>$${product.price}</td>
            <td class="actions">
                <button class="edit-btn" onclick="editProduct('${product.id}')">Editar</button>
                <button class="delete-btn" onclick="handleDelete('${product.id}')">Eliminar</button>
            </td>
        `;

        tableBody.appendChild(row);
    });

    actualizarContador();
}

// Actualizar número total de repuestos
function actualizarContador() {
    const productos = getProducts();
    const contador = document.getElementById("product-count");
    contador.textContent = `Total de repuestos: ${productos.length}`;
}

// Confirmar y eliminar repuesto
function handleDelete(id) {
    if (confirm('¿Estás seguro de que deseas eliminar este repuesto?')) {
        const producto = findProductById(id);
        deleteProduct(id);
        renderTable();

        const historial = HistorialRepuestos.obtenerInstancia();
        historial.agregarEvento(`Repuesto "${producto.name}" eliminado.`);
        mostrarHistorial();
    }
}

// Limpiar datos inválidos
function limpiarRepuestosInvalidos() {
    let productos = getProducts();
    const productosValidos = productos.filter(product =>
        product.name &&
        product.category &&
        product.price !== undefined &&
        product.price !== "undefined"
    );

    if (productosValidos.length !== productos.length) {
        saveProducts(productosValidos);
    }
}

// Mostrar historial en pantalla
function mostrarHistorial() {
    const historial = HistorialRepuestos.obtenerInstancia();
    const eventos = historial.obtenerEventos();

    const lista = document.getElementById("historial-lista");
    lista.innerHTML = '';

    eventos.forEach(evento => {
        const li = document.createElement("li");
        li.textContent = evento;
        lista.appendChild(li);
    });
}

// Inicializar
limpiarRepuestosInvalidos();
renderTable();
mostrarHistorial();
