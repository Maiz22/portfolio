document.addEventListener('DOMContentLoaded', async () => {
    document
        .getElementById('contact-form')
        .addEventListener('submit', function (event) {
            event.preventDefault()
            emailjs.sendForm('service_010rg5o', 'template_623hj0f', this).then(
                function () {
                    alert('Message sent!')
                },
                function (error) {
                    alert('Failed to send message. Please try again.')
                }
            )
        })
})
