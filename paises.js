document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('select-paises');
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
            // Ordenar países alfabéticamente por nombre común
            data.sort((a, b) => a.name.common.localeCompare(b.name.common));
            select.innerHTML = '';
            data.forEach(pais => {
                const option = document.createElement('option');
                option.value = pais.cca2 || pais.name.common;
                option.textContent = pais.name.common;
                select.appendChild(option);
            });
        })
        .catch(() => {
            select.innerHTML = '<option value="">No se pudieron cargar los países</option>';
        });
});
