function adicionarAoDisplay(valor) {
  document.querySelector('#display').value += valor;
}

function limparDisplay() {
  document.querySelector('#display').value = '';
}

function calcular() {
  const display = document.querySelector('#display');
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Erro';
  }
}

function apagarUltimo() {
  const display = document.querySelector('#display');
  display.value = display.value.slice(0, -1);
}

document.addEventListener('keydown', function (event) {
  const key = event.key;

  if (!isNaN(key) || key === '.') {
    adicionarAoDisplay(key);
  }

  if (['+', '-', '*', '/'].includes(key)) {
    adicionarAoDisplay(key);
  }

  if (key === 'Enter') {
    event.preventDefault(); // Evita comportamento padrão
    calcular();
  }

  if (key === 'Backspace') {
    apagarUltimo();
  }

  if (key === 'Escape') {
    limparDisplay();
  }
});
