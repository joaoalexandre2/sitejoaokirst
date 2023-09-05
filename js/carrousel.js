$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 3, // Número de slides visíveis em telas maiores (ajuste conforme necessário)
        slidesToScroll: 1, // Número de slides a rolar por vez
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 768, // Largura da tela em que você deseja que o carrossel mude
                settings: {
                    slidesToShow: 1, // Número de slides visíveis em telas menores (1 para um por vez)
                    slidesToScroll: 1 // Número de slides a rolar por vez
                }
            }
            // Adicione mais breakpoints e configurações conforme necessário
        ]
    });
});
