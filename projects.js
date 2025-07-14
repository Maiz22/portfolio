document.addEventListener('DOMContentLoaded', async () => {
    const owner = 'Maiz22'

    const repos = {
        fastapi_post_api: [
            'images/python.png',
            'images/postgres.png',
            'images/redis.png',
            'images/nginx.png',
            'images/docker.png',
        ],
        drinks_api: ['images/python.png', 'images/postgres.png'],
        react_express_blog: [
            'images/javascript.png',
            'images/express.png',
            'images/react.png',
            'images/vite.png',
            'images/mongodb.png',
        ],
        file_organizer: ['images/python.png'],
    }

    // Collect all fetch promises in order
    const repoEntries = Object.entries(repos)
    const results = await Promise.all(
        repoEntries.map(([repo, images], index) =>
            getGithubRepo(owner, repo, images, index)
        )
    )
    // Render in order
    const container = document.getElementById('readme-container')
    results.forEach((div) => {
        if (div) container.appendChild(div)
    })

    // Burger menu toggle for responsive navbar
    const burger = document.getElementById('burger-menu')
    const navbar = document.querySelector('.navbar')
    if (burger && navbar) {
        burger.addEventListener('click', () => {
            navbar.classList.toggle('active')
        })
    }
})

async function getGithubRepo(owner, repo, images, index) {
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/readme`
    const repoUrl = `https://github.com/${owner}/${repo}`
    try {
        let response = await fetch(apiUrl, {
            headers: { Accept: 'application/vnd.github.v3.raw' },
        })
        let responseText = await response.text()
        // Create the div but do not append to DOM yet
        const div = document.createElement('div')
        div.innerHTML = marked.parse(responseText.split('##')[0])
        const img_container = document.createElement('div')
        img_container.classList.add('img-container')
        images.forEach((image) => {
            const img = document.createElement('img')
            img.setAttribute('src', image)
            img_container.appendChild(img)
        })
        div.appendChild(img_container)
        const a = document.createElement('a')
        a.setAttribute('href', repoUrl)
        a.setAttribute('target', '_blank')
        a.classList.add('github-link')
        a.innerHTML = 'See full project on GitHub'
        div.appendChild(a)
        if (index % 2 == 0) {
            div.setAttribute('data-aos', 'fade-right')
        } else {
            div.setAttribute('data-aos', 'fade-left')
        }
        return div
    } catch (err) {
        console.log(err)
        // Optionally return an error div or null
        return null
    }
}
