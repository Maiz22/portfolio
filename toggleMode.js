document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme)
    } else {
        const prefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches
        document.documentElement.setAttribute(
            'data-theme',
            prefersDark ? 'dark' : 'light'
        )
    }
    document.querySelector('#toggle-btn').addEventListener('click', (e) => {
        e.preventDefault()
        toggleTheme()
    })
})

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme')
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
}
