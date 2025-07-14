document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('DOMContentLoaded', function () {
        const typewriter = document.querySelector('.typewriter')
        if (!typewriter) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        typewriter.classList.remove('inactive')
                    } else {
                        typewriter.classList.add('inactive')
                    }
                })
            },
            { threshold: 0.1 }
        )
        observer.observe(typewriter)
    })
})
