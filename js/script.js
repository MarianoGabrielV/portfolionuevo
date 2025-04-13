// Función para mostrar la sección seleccionada
function mostrarSeccion(seccion) {
    document.getElementById('programador').classList.add('d-none');
    document.getElementById('analista').classList.add('d-none');
    
    document.getElementById(seccion).classList.remove('d-none');
}
