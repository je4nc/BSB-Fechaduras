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

// 04. Configuração do WhatsApp
// Insira o número oficial com DDI e DDD, somente dígitos.
// Exemplo de formato: 55 + DDD + número do telefone.
const whatsapp = '';

// Exibir o botão apenas quando o número estiver no formato esperado.
if (/^55\d{10,11}$/.test(whatsapp)) {
    const a = document.querySelector('#whatsapp');

    a.href = 'https://wa.me/' + whatsapp + '?text=' +
        encodeURIComponent('Olá! Gostaria de solicitar um orçamento.');

    a.hidden = false;
}
