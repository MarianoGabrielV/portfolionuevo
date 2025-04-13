
        function mostrarSeccion(seccion) {
            document.getElementById('inicio').classList.add('d-none');
            document.getElementById('programador').classList.add('d-none');
            document.getElementById('analista').classList.add('d-none');
            document.getElementById(seccion).classList.remove('d-none');
        }
        function volverInicio() {
            document.getElementById('inicio').classList.remove('d-none');
            document.getElementById('programador').classList.add('d-none');
            document.getElementById('analista').classList.add('d-none');
        }
