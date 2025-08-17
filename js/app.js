const form = document.getElementById('product-form');
const nameInput = document.getElementById('name');
const categoryInput = document.getElementById('category');
const priceInput = document.getElementById('price');
const idInput = document.getElementById('product-id');
const tableBody = document.getElementById('product-table-body');

// Cargar lista de productos al iniciar
document.addEventListener('DOMContentLoaded', () => {
    renderTable();
    mostrarHistorial();
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const product = {
        id: idInput.value,
        nombre: nameInput.value.trim(),
        categoria: categoryInput.value.trim(),
        precio: parseFloat(priceInput.value)
    };

    // ✅ Validación con las claves correctas
    if (!product.nombre || !product.categoria || isNaN(product.precio)) {
        Swal.fire({ icon: 'warning', title: 'Campos incompletos', text: 'Revisa nombre, categoría y precio.' });
        return;
    }

    try {
        await saveProduct(product);
        const nombreMostrado = product.nombre; // guardo antes de resetear

        form.reset();
        idInput.value = '';

        const historial = HistorialRepuestos.obtenerInstancia();
        historial.agregarEvento(`Repuesto "${nombreMostrado}" guardado o editado.`);
        mostrarHistorial();

        Swal.fire({
            icon: 'success',
            title: 'Guardado',
            text: `El repuesto "${nombreMostrado}" se guardó correctamente.`,
            confirmButtonColor: '#5d40de'
        });

        renderTable();
    } catch (err) {
        console.error(err);
        Swal.fire({ icon: 'error', title: 'Error', text: 'No se pudo guardar el repuesto.' });
    }
});


async function editProduct(id) {
    const product = await findProductById(id);
    if (!product) return;

    nameInput.value = product.nombre;
    categoryInput.value = product.categoria;
    priceInput.value = product.precio;
    idInput.value = product.id;
}

async function renderTable() {
    const products = await getProducts();
    tableBody.innerHTML = '';

    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.nombre}</td>
            <td>${product.categoria}</td>
            <td>$${parseFloat(product.precio).toFixed(2)}</td>
            <td class="actions">
                <button class="edit-btn" onclick="editProduct(${product.id})"><i class="fas fa-edit"></i></button>
                <button class="delete-btn" onclick="handleDelete(${product.id})"><i class="fas fa-trash-alt"></i></button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    actualizarContador(products.length);
}

function actualizarContador(total) {
    const contador = document.getElementById("product-count");
    contador.textContent = `Total de repuestos: ${total}`;
}

async function handleDelete(id) {
    Swal.fire({
        title: '¿Eliminar repuesto?',
        text: 'Esta acción no se puede deshacer.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#e74c3c',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then(async (result) => {
        if (result.isConfirmed) {
            await deleteProduct(id);
            renderTable();

            const historial = HistorialRepuestos.obtenerInstancia();
            historial.agregarEvento(`Repuesto con ID ${id} eliminado.`);
            mostrarHistorial();

            Swal.fire({
                icon: 'success',
                title: 'Eliminado',
                text: `El repuesto ha sido eliminado.`,
                confirmButtonColor: '#5d40de'
            });
        }
    });
}

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






