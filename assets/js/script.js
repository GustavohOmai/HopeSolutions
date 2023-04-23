let checkbox = document.getElementById('checkbox-menu')
let menu = document.getElementById('nav-mob')

function hamburguer() {
  if (checkbox.checked) {
    menu.classList.remove('display-none')
  } else {
    menu.classList.add('display-none')
  }
}

var scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene);
parallaxInstance.invert(false, false)
parallaxInstance.scalar(30, 30)

var vert = document.getElementById('vert');
const vertpara = new Parallax(vert);
vertpara.invert(false, false)
vertpara.scalar(30, 30)



var hope = document.getElementById('hope');
const hopepara = new Parallax(hope);
hopepara.invert(false, false)
hopepara.scalar(10, 10)



AOS.init({
  disable: false,
  offset: 400, 
});

if ($(window).width() <= 960) {
  AOS.init({
    disable: true,

  });
} else {

}AOS.init();

$(document).ready(function () {
  $('.projetos').slick({
  dots: true,
  infinite: true,
  arrows:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
});

$('.colaboradoresmobile').slick({
  dots: true,
  infinite: true,
  arrows:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
});

$('.slick-produtos').slick({
  dots: true,
  infinite: true,
  arrows:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
});
});


$(document).ready(function() {
  // Atualiza a classe ativa no Scrollspy lateral fixo
  $(window).on('scroll', function() {
    $('.scrollspy li').removeClass('active');
    var scrollTop = $(window).scrollTop();
    $('section').each(function() {
      if ($(this).position().top <= scrollTop) {
        $('.scrollspy li a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
      }
    });
    // Adiciona a classe "active" ao primeiro item da lista de navegação
    $('.scrollspy li:first-child').addClass('active');
  });
});