const translations = {
    'es': {
        'inicio': 'Inicio',
        'contactos': 'Contactos',
        'galeria': 'Galeria',
        'contribuir': 'Contribuir',
        'quote': 'la discapacidad no te define; te define como haces frente a los desafios que la discapacidad te presenta',
        'author': '-Jim Abbott',
        'mision-title': 'MISION',
        'mision-text': 'nuestra mision es ayudar en la gestion y creación de proyectos enfocados a mejorar la calidad de vida para las personas con discapacidad del país.'
    },
    'en': {
        'inicio': 'Home',
        'contactos': 'Contacts',
        'galeria': 'Gallery',
        'contribuir': 'Contribute',
        'quote': 'disability doesn\'t define you; what defines you is how you cope with the challenges that disability presents',
        'author': '-Jim Abbott',
        'mision-title': 'MISSION',
        'mision-text': 'our mission is to help in the management and creation of projects focused on improving the quality of life for people with disabilities in the country.'
    },
    'zh': {
        'inicio': '首页',
        'contactos': '联系我们',
        'galeria': '画廊',
        'contribuir': '贡献',
        'quote': '残疾并不定义你；定义你的是你如何应对残疾带来的挑战',
        'author': '-吉姆·阿博特',
        'mision-title': '使命',
        'mision-text': '我们的使命是帮助管理和创建项目，以改善国内残疾人的生活质量。'
    },
    'pt': {
        'inicio': 'Início',
        'contactos': 'Contatos',
        'galeria': 'Galeria',
        'contribuir': 'Contribuir',
        'quote': 'a deficiência não te define; o que te define é como você enfrenta os desafios que a deficiência apresenta',
        'author': '-Jim Abbott',
        'mision-title': 'MISSÃO',
        'mision-text': 'nossa missão é ajudar na gestão e criação de projetos focados em melhorar a qualidade de vida das pessoas com deficiência no país.'
    }
};

async function changeLanguage(lang) {
    try {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
    } catch (error) {
        console.error('Error changing language:', error);
    }
}
function toggleLanguageMenu() {
			const menu = document.getElementById('languageMenu');
			menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
			
			// Cerrar el menú cuando se hace clic fuera de él
			document.addEventListener('click', function closeMenu(e) {
				if (!e.target.closest('.language-selector')) {
					menu.style.display = 'none';
					document.removeEventListener('click', closeMenu);
				}
			});
		}