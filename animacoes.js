$(document).ready(function(){
    // Animação ao clicar nas imagens
    if ($('#overlay').length === 0) {
        $('body').append('<div id="overlay"></div>');
    }
    const overlay = $('#overlay');
    const imgzoom = $('<img id="imgzoom">');

    $('body').append(imgzoom);
    $('.imgs').click(function() {
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

    // Comando para copiar o texto para a área de transferência
    $('.botão-copiar-css').click(function() {
        const text = $('#id-cópia-css').text();
        const tempInput = $('<textarea>').val(text).appendTo('body');
        tempInput.select();
        document.execCommand('copy');
        tempInput.remove();
        $(this).text("Copiado com Sucesso \u{2714}");
    });

    $('.botão-copiar-js').click(function() {
        const text = $('#id-cópia-js').text();
        const tempInput = $('<textarea>').val(text).appendTo('body');
        tempInput.select();
        document.execCommand('copy');
        tempInput.remove();
        $(this).text("Copiado com Sucesso \u{2714}");
    });

    // Ajuste do padding ao clicar no botão de alguma linguagem
    $('button').click(function(){
        $('main').css("padding", "5px 15px 30px 15px");
        $('.seção').css("margin-bottom", "25px");
    });
});