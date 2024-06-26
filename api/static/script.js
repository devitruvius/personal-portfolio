document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // 50% da seção visível
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            const navLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (entry.isIntersecting && !navLink.classList.contains('active')) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Adicionar a classe 'active' ao link de navegação da seção #inicio inicialmente
    const linkInicio = document.querySelector('.nav-link[href="#inicio"]');
    linkInicio.classList.add('active');

    // Abrir e fechar menu mobile
    const menuMobile = document.querySelector('.menu-mobile');
    const body = document.querySelector('body');

    menuMobile.addEventListener('click', () => {
        menuMobile.classList.toggle("bi-list");
        menuMobile.classList.toggle("bi-x");
        body.classList.toggle("menu-nav-active");
    });

    // Fechar o menu ao clicar em um item e mudar o ícone para list
    const navItem = document.querySelectorAll('.nav-item');

    navItem.forEach(item => {
        item.addEventListener("click", () => {
            if (body.classList.contains("menu-nav-active")) {
                body.classList.remove("menu-nav-active")
                menuMobile.classList.replace("bi-x", "bi-list");
            }
        })
    });

    // Ativar a classe 'active' ao clicar nos links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Adicionar classe 'active' ao link clicado
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            // Não utilizar scrollIntoView para evitar comportamento estranho
            // targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Animação dos itens na tela
    const item = document.querySelectorAll("[data-anime]");

    const animeScroll = () => {
        const windowTop = window.scrollY + window.innerHeight * 0.85;

        item.forEach(element => {
            if (windowTop > element.offsetTop) {
                element.classList.add("animate");
            } else {
                element.classList.remove("animate");
            }
        });
    };

    animeScroll();

    window.addEventListener("scroll", () => {
        animeScroll();
    });

    // Ativar o carregamento do botão enviar formulário
    const btnEnviar = document.querySelector('#btn-enviar');
    const btnEnviarLoader = document.querySelector('#btn-enviar-loader');

    btnEnviar.addEventListener('click', () => {
        btnEnviarLoader.style.display = 'block';
        btnEnviar.style.display = 'none';
    });

    // Remover o alerta da mensagem depois de 5 segundos
    setTimeout(() => {
        document.querySelector('#alerta').style.display = 'none';
    }, 5000);
});