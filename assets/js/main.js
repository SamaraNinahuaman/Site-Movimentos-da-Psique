document.querySelectorAll('[menu-nav]').forEach(link => {
    const conteudo = document.getElementById('conteudo')

    link.onclick = function (e) {
        e.preventDefault()
        fetch(link.getAttribute('menu-nav'))
            .then(resp => resp.text())
            .then(html => conteudo.innerHTML = html)
    }
})


const form = document.querySelector('#form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nomeCompleto = text(input - nomeCompleto.value);
        alert(1);

    })
}
