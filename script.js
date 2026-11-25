// 01. Elementos do menu de navegação
const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');

// 02. Abrir ou fechar o menu em dispositivos móveis
menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
});

// 03. Fechar o menu ao clicar em um link
nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        nav.classList.remove('open');
        menu.setAttribute('aria-expanded', 'false');
    });
});

// 04. Configuração dos links de WhatsApp
// Número oficial da BSB: Brasil (55) + DDD (61) + telefone (99601-3123).
// Mantenha somente números, sem espaços, parênteses ou hífen.
const whatsappNumber = '5561996013123';
const whatsappMessage = 'Olá! Gostaria de solicitar um orçamento para fechadura eletrônica.';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

// Atualiza todos os links de WhatsApp: botão flutuante e chamada na seção Contato.
document.querySelectorAll('[data-whatsapp-link]').forEach(link => {
    link.href = whatsappUrl;
});

// 05. Funcionamento dos carrosséis de produtos e instalações
// O usuário também pode arrastar o conteúdo horizontalmente em telas touch.
document.querySelectorAll('[data-carousel]').forEach(carousel => {
    const track = carousel.querySelector('[data-carousel-track]');
    const previousButton = carousel.querySelector('[data-carousel-prev]');
    const nextButton = carousel.querySelector('[data-carousel-next]');

    if (!track || !previousButton || !nextButton) {
        return;
    }

    // Calcula a distância de avanço com base na largura de um card e no espaço entre eles.
    const getScrollDistance = () => {
        const firstCard = track.querySelector('.carousel-card');
        const trackStyles = window.getComputedStyle(track);
        const gap = parseFloat(trackStyles.columnGap || trackStyles.gap) || 18;

        return firstCard
            ? firstCard.getBoundingClientRect().width + gap
            : track.clientWidth * 0.8;
    };

    // Desativa as setas quando o carrossel chega ao início ou ao fim.
    const updateButtons = () => {
        const maxScroll = track.scrollWidth - track.clientWidth;

        previousButton.disabled = track.scrollLeft <= 2;
        nextButton.disabled = track.scrollLeft >= maxScroll - 2;
    };

    previousButton.addEventListener('click', () => {
        track.scrollBy({
            left: -getScrollDistance(),
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', () => {
        track.scrollBy({
            left: getScrollDistance(),
            behavior: 'smooth'
        });
    });

    track.addEventListener('scroll', updateButtons, { passive: true });
    window.addEventListener('resize', updateButtons);

    updateButtons();
});

