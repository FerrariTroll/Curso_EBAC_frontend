console,console.log("Olá mundo")

const form = document.getElementById('form-deposito');



form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = document.getElementById('number1').value;
    const campoB = document.getElementById('number2').value;
    const mensagemSucesso = 'Parabéns o valor está correto';

    if (campoB <= campoA) {
        alert("Campo B deve ser maior que o CampoA");
        e.preventDefault();
        return false
    } else {
        alert("Parabéns, você conseguiu!")
        return true
    }

})

console.log(form);