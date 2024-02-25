const burger = document.querySelector('.burger')
const menu = document.querySelector('.mobile-menu')

burger.addEventListener('click', () => {
  if(menu.classList.contains('visible')) {
    menu.classList.remove('visible')
  } else {
    menu.classList.add('visible')
  }
})