document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

new Vue({
    el: '#app',
    data: {
        projects: [
            {
                title: 'Projeto 1',
                description: 'Descrição do projeto 1.'
            },
            {
                title: 'Projeto 2',
                description: 'Descrição do projeto 2.'
            },
            // Adicione mais projetos conforme necessário
        ]
    }
});