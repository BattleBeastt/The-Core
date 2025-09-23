// Función que inicializa el widget de Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'es',
        includedLanguages: 'en,zh,pt,it,fr,ru',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}

// Función para mostrar/ocultar el widget de traducción
function toggleLanguageMenu() {
    const element = document.getElementById('google_translate_element');
    if (element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
}

// Función para cambiar el idioma usando Google Translate
function changeLanguage(lang) {
    const selectElement = document.querySelector('.goog-te-combo');
    if (selectElement) {
        selectElement.value = lang;
        selectElement.dispatchEvent(new Event('change'));
    }
}

// Ocultar el widget de traducción cuando se hace clic fuera de él
document.addEventListener('click', function(e) {
    const translateElement = document.getElementById('google_translate_element');
    const translateIcon = document.querySelector('.translate-icon');
    
    if (!translateElement || !translateIcon) return;
    
    if (!translateElement.contains(e.target) && e.target !== translateIcon) {
        translateElement.style.display = 'none';
    }
});