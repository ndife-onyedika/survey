var $label = $('label');
var $radio = $('.form__radio-input');
var $main = $('#Main');
var $cont = $('#cont');
var $progressBar = $('.progress-bar');
var num = 0;

$($main).on('click', function (e) {
    if (num === 0) {
        num = 2;
        $progressBar.css('width', num + '%');
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 2000);
    } else {
        num = 0;
        $progressBar.css('width', num + '%');
    }
})
$($main).hover(function () {
    $(this).toggleClass("animated");
    $(this).toggleClass("pulse");
    $(this).toggleClass("infinite");
})
$($cont).hover(function () {
    $(this).toggleClass("animated");
    $(this).toggleClass("pulse");
    $(this).toggleClass("infinite");
})

$($radio).on('change', function (e) {
    if (this.name === 'ques_1') {
        num = 10;
        $progressBar.css('width', num + '%');

        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#two').offset().top
        }, 1500);

    } else if (this.name === 'ques_2') {
        num = 20;
        $progressBar.css('width', num + '%');

        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#three').offset().top
        }, 1500);
    } else if (this.name === 'ques_3') {
        num = 30;
        $progressBar.css('width', num + '%');

        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#four').offset().top
        }, 1500);
    } else if (this.name === 'ques_4') {
        num = 40;
        $progressBar.css('width', num + '%');

        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#five').offset().top
        }, 1500);
    } else if (this.name === 'ques_5') {
        num = 50;
        $progressBar.css('width', num + '%');

        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#six').offset().top
        }, 1500);
    } else if (this.name === 'ques_6') {
        num = 60;
        $progressBar.css('width', num + '%');

        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#seven').offset().top
        }, 1500);
    } else if (this.name === 'ques_7') {
        num = 70;
        $progressBar.css('width', num + '%');

        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#eight').offset().top
        }, 1500);
    } else if (this.name === 'ques_8') {
        num = 80;
        $progressBar.css('width', num + '%');

        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#nine').offset().top
        }, 1500);
    } else if (this.name === 'ques_9') {
        num = 90;
        $progressBar.css('width', num + '%');

        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#ten').offset().top
        }, 1500);
    } else if (this.name === 'ques_10') {
        num = 100;
        $progressBar.css('width', num + '%');
    }


})
