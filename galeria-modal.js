// Modal presentación de imágenes con carrusel
const contenedorFotos = document.getElementById('contenedorFotos');
const modal = document.getElementById('modalGaleria');
const imgModal = document.getElementById('imgModal');
const cerrarModal = document.getElementById('cerrarModal');
const btnAnterior = document.getElementById('anteriorImg');
const btnSiguiente = document.getElementById('siguienteImg');

const imagenes = Array.from(contenedorFotos.querySelectorAll('img'));
let indiceActual = 0;

function mostrarImagen(indice) {
	if (indice < 0) indice = imagenes.length - 1;
	if (indice >= imagenes.length) indice = 0;
	imgModal.src = imagenes[indice].src;
	indiceActual = indice;
}

contenedorFotos.addEventListener('click', function(e) {
	if (e.target.tagName === 'IMG') {
		const idx = imagenes.indexOf(e.target);
		if (idx !== -1) {
			mostrarImagen(idx);
			modal.style.display = 'flex';
		}
	}
});

btnAnterior.onclick = function(e) {
	e.stopPropagation();
	mostrarImagen(indiceActual - 1);
};

btnSiguiente.onclick = function(e) {
	e.stopPropagation();
	mostrarImagen(indiceActual + 1);
};

cerrarModal.onclick = function() {
	modal.style.display = 'none';
	imgModal.src = '';
};

modal.onclick = function(e) {
	if (e.target === modal) {
		modal.style.display = 'none';
		imgModal.src = '';
	}
};


