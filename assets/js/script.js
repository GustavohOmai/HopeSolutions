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