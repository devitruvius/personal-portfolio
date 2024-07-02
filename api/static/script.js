document.addEventListener("DOMContentLoaded", function() {
    // Seção: Inicialização de Variáveis
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const menuMobile = document.querySelector('.menu-mobile');
    const body = document.querySelector('body');
    const navItems = document.querySelectorAll('.nav-item');
    const items = document.querySelectorAll("[data-anime]");
    const btnEnviar = document.querySelector('#btn-enviar');
    const btnEnviarLoader = document.querySelector('#btn-enviar-loader');

    // Verificar se elementos existem antes de usá-los
    if (navLinks.length === 0 || sections.length === 0 || !menuMobile || !body || navItems.length === 0 || items.length === 0 || !btnEnviar || !btnEnviarLoader) {
        console.error('Um ou mais elementos não foram encontrados na página.');
        return;
    }

    // Seção: Opções do IntersectionObserver
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // 50% da seção visível
    };

    // Seção: Callback do IntersectionObserver
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            const navLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (!navLink) {
                console.warn(`Link de navegação para a seção #${entry.target.id} não encontrado.`);
                return;
            }
            if (entry.isIntersecting && !navLink.classList.contains('active')) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    };

    // Seção: Inicialização do IntersectionObserver
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));

    // Seção: Ativar link de navegação inicial
    const linkInicio = document.querySelector('.nav-link[href="#inicio"]');
    if (linkInicio) {
        linkInicio.classList.add('active');
    } else {
        console.warn('Link de navegação para a seção #inicio não encontrado.');
    }

    // Seção: Menu Mobile - Abrir e fechar
    menuMobile.addEventListener('click', () => {
        menuMobile.classList.toggle("bi-list");
        menuMobile.classList.toggle("bi-x");
        body.classList.toggle("menu-nav-active");
    });

    // Seção: Menu Mobile - Fechar ao clicar em um item
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            if (body.classList.contains("menu-nav-active")) {
                body.classList.remove("menu-nav-active");
                menuMobile.classList.replace("bi-x", "bi-list");
            }
        });
    });

    // Seção: Ativar link de navegação ao clicar
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (!targetSection) {
                console.warn(`Seção com id #${targetId} não encontrada.`);
                return;
            }
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            // targetSection.scrollIntoView({ behavior: 'smooth' }); // Desativado
        });
    });

    // Seção: Animação dos itens na tela
    const animeScroll = () => {
        const windowTop = window.scrollY + window.innerHeight * 0.85;
        items.forEach(element => {
            if (windowTop > element.offsetTop) {
                element.classList.add("animate");
            } else {
                element.classList.remove("animate");
            }
        });
    };

    animeScroll();
    window.addEventListener("scroll", animeScroll);

    // Seção: Botão Enviar - Mostrar loader
    btnEnviar.addEventListener('click', () => {
        btnEnviarLoader.style.display = 'block';
        btnEnviar.style.display = 'none';
    });

    // Seção: Remover alerta após 5 segundos
    setTimeout(() => {
        const alerta = document.querySelector('#alerta');
        if (alerta) {
            alerta.style.display = 'none';
        }
    }, 5000);

    // Seção: Definir item de navegação ativo com base no hash da URL
    const setActiveNavItemFromHash = () => {
        const hash = window.location.hash;
        if (hash) {
            const targetNavLink = document.querySelector(`.nav-link[href="${hash}"]`);
            if (targetNavLink) {
                navLinks.forEach(link => link.classList.remove('active'));
                targetNavLink.classList.add('active');
            }
        }
    };

    setActiveNavItemFromHash();
});