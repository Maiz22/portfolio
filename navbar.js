document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.navbar')
    //const burgerMenu = document.querySelector('#burger-menu')
    const arrowUp = document.querySelector('#arrow-up')
    const homeBtn = document.querySelector('#navbar-home')
    const aboutBtn = document.querySelector('#navbar-about')
    const portfolioBtn = document.querySelector('#navbar-portfolio')
    const contactBtn = document.querySelector('#navbar-contact')

    navMode = 'desktop'
    const navHome = document.querySelector('#menu-home')
    const navAbout = document.querySelector('#menu-about')
    const navProject = document.querySelector('#menu-project')
    const navContact = document.querySelector('#menu-contact')
    changeNavbarUI(navHome, navAbout, navProject, navContact)

    nav.classList.add('active')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            arrowUp.classList.add('active')
        } else {
            arrowUp.classList.remove('active')
        }
        if (window.scrollY > 64) {
            nav.classList.remove('active')
        } else {
            nav.classList.add('active')
        }
    })

    window.addEventListener('resize', () => {
        changeNavbarUI(navHome, navAbout, navProject, navContact)
    })

    arrowUp.addEventListener('click', (e) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        e.preventDefault()
    })

    homeBtn.addEventListener('click', (e) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        e.preventDefault()
    })

    aboutBtn.addEventListener('click', (e) => {
        document.querySelector('#about').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
        e.preventDefault()
    })

    portfolioBtn.addEventListener('click', (e) => {
        document.querySelector('#portfolio-projects').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
        e.preventDefault()
    })

    contactBtn.addEventListener('click', (e) => {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
        e.preventDefault()
    })
})

function changeNavbarUI(navHome, navAbout, navProject, navContact) {
    if (window.innerWidth <= 480) {
        if (navMode !== 'mobile') {
            navHome.innerHTML = ''
            navAbout.innerHTML = ''
            navProject.innerHTML = ''
            navContact.innerHTML = ''
            let i = document.createElement('i')
            i.classList.add('fa-solid', 'fa-house')
            navHome.appendChild(i)
            i = document.createElement('i')
            i.classList.add('fa-solid', 'fa-user')
            navAbout.appendChild(i)
            i = document.createElement('i')
            i.classList.add('fa-solid', 'fa-briefcase')
            navProject.appendChild(i)
            i = document.createElement('i')
            i.classList.add('fa-solid', 'fa-envelope')
            navContact.appendChild(i)
            navMode = 'mobile'
        }
    } else {
        if (navMode !== 'desktop') {
            navHome.innerHTML = 'Home'
            navAbout.innerHTML = 'About'
            navProject.innerHTML = 'Projects'
            navContact.innerHTML = 'Contact'
            navMode = 'desktop'
        }
    }
}
