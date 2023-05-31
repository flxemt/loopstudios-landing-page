const menuBtn = document.getElementById('menu-btn')
const mobileNav = document.getElementById('mobile-nav')
const iconHamburger = document.getElementById('icon-hamburger')
const iconClose = document.getElementById('icon-close')

let isNavOpen = false

function toggleMenu() {
  isNavOpen = !isNavOpen

  if (isNavOpen) {
    document.documentElement.scrollTop = 0
    mobileNav.classList.add('nav-open')
    document.body.classList.add('no-scroll')
    iconHamburger.classList.add('hidden')
    iconClose.classList.remove('hidden')
  } else {
    mobileNav.classList.remove('nav-open')
    document.body.classList.remove('no-scroll')
    iconHamburger.classList.remove('hidden')
    iconClose.classList.add('hidden')
  }
}

menuBtn.addEventListener('click', toggleMenu)
