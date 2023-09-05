let menuIcon = document.querySelector('.menu-icon');
let ul = document.querySelector('.ul');

menuIcon.addEventListener('click', () => {
    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = 'img/menu.png';
    } else {
        ul.classList.add('ativo');
        document.querySelector('.menu-icon img').src = 'img/close.png';
    }
});

// Adicione um evento de clique ao documento para fechar o menu quando o usuário clicar fora
document.addEventListener('click', (event) => {
    if (!ul.contains(event.target) && !menuIcon.contains(event.target)) {
        ul.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = 'img/menu.png';
    }
});

