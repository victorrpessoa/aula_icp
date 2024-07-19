$(document).ready(function(){
    // Animação ao clicar nas imagens
    if ($('#overlay').length === 0) {
        $('body').append('<div id="overlay"></div>');
    }
    const overlay = $('#overlay');
    const imgzoom = $('<img id="imgzoom">');

    $('body').append(imgzoom);
    $('.imgbloco').click(function() {
        const src = $(this).attr('src');
        imgzoom.attr('src', src);
        overlay.css('display', 'block');
        imgzoom.css('display', 'block');
        setTimeout(function() {
            overlay.css('opacity', 1);
            imgzoom.css('transform', 'translate(-50%, -50%) scale(1)');
        }, 50);
    });

    overlay.click(function() {
        overlay.css('opacity', 0);
        imgzoom.css('transform', 'translate(-50%, -50%) scale(0)');
        setTimeout(function() {
            overlay.css('display', 'none');
            imgzoom.css('display', 'none');
        }, 300);
    });

    // Animação de scroll ao clicar no botão de voltar ao topo
    $('.voltar').click(function(){
        $('html, body').animate({scrollTop: 0}, 500);       
    });

    // Ajuste do padding ao clicar no botão de alguma linguagem
    $('#ajuste').click(function(){
        $('main').css("padding", "5px 15px 30px 15px");
        $('footer').css("position", "relative");
        $('footer').css("width", "100vw");
        $('footer').css("margin", "-10px 0px -10px -13px");
    });
});