let menuIcon = document.querySelector('.menu-icon');
let ul = document.querySelector('.ul');

// Função para fechar o menu
function fecharMenu() {
    ul.classList.remove('ativo');
    document.querySelector('.menu-icon img').src = 'img/menu.png';
}

menuIcon.addEventListener('click', () => {
    if (ul.classList.contains('ativo')) {
        fecharMenu();
    } else {
        ul.classList.add('ativo');
        document.querySelector('.menu-icon img').src = 'img/close.png';
    }
});

// Adicione um evento de clique aos itens do menu para rolar até a seção correspondente e fechar o menu
document.querySelectorAll('.ul li a').forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o comportamento padrão do link

        // Obtém o valor do atributo "href" do link (por exemplo, "#sobre" ou "#contato")
        let alvo = item.getAttribute('href');

        // Obtém o elemento correspondente à âncora alvo
        let secaoAlvo = document.querySelector(alvo);

        if (secaoAlvo) {
            // Role a página até a seção alvo usando o método scrollTo
            window.scrollTo({
                top: secaoAlvo.offsetTop,
                behavior: 'smooth' // Rolagem suave
            });

            // Feche o menu após um pequeno atraso para dar tempo à rolagem
            setTimeout(fecharMenu, 500); // Ajuste o tempo conforme necessário
        }
    });
});

// Adicione um evento de clique ao documento para fechar o menu quando o usuário clicar fora
document.addEventListener('click', (event) => {
    if (!ul.contains(event.target) && !menuIcon.contains(event.target)) {
        fecharMenu();
    }
});


