$(document).ready(function(){
    $('.your-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.friends-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    const icon = $('.faq-icon');
    const telegram = $('#modal-telegram')

    function triggerShake() {
        icon.addClass('shake');
        setTimeout(() => {
            icon.removeClass('shake');
        }, 500);
    }

    setInterval(triggerShake, 5000);

    telegram.on('click', function() {
        const username = '@Punkmovies01';
        const url = `tg://resolve?domain=${username}`;
        console.log(url);
        window.location.href = url;
    });
});