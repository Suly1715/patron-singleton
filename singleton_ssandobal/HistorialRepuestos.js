class HistorialRepuestos {
    static instanciaUnica;

    constructor() {
        if (HistorialRepuestos.instanciaUnica) {
            return HistorialRepuestos.instanciaUnica;
        }

        this.eventos = [];
        HistorialRepuestos.instanciaUnica = this;
    }

    // Agrega un evento al historial
    agregarEvento(mensaje) {
        const fecha = new Date().toLocaleTimeString();
        const entrada = `[${fecha}] ${mensaje}`;
        this.eventos.push(entrada);
    }

    // Devuelve el historial como copia (no editable directamente)
    obtenerEventos() {
        return [...this.eventos];
    }

    // Borra todo el historial
    reiniciar() {
        this.eventos = [];
    }

    // Devuelve siempre la misma instancia
    static obtenerInstancia() {
        if (!HistorialRepuestos.instanciaUnica) {
            HistorialRepuestos.instanciaUnica = new HistorialRepuestos();
        }
        return HistorialRepuestos.instanciaUnica;
    }
}

// Hacer disponible globalmente
window.HistorialRepuestos = HistorialRepuestos;
