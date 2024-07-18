$(document).ready(function() {
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
});