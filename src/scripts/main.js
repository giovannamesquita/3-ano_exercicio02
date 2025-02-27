document.getElementById('form-sorteador').onsubmit = function(evento) {
    evento.preventDefault();
        const numeroMaximo = document.getElementById('numero-maximo').value;
        const numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;
       document.getElementById('resultado-valor').innerText = numeroAleatorio;
       document.querySelector('.resultado').style.display = 'block';
    };