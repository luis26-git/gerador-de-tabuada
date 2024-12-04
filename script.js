function tabuada() {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');

    // Verifica se o campo de número está vazio
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número');
    } else {
        // Converte o valor para número
        let n = Number(num.value);

        // Limpa a lista de tabuada antes de gerar a nova
        tab.innerHTML = '';

        // Gera a tabuada de 1 a 10
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option');
            item.text = `${n} x ${i} = ${n * i}`;
            tab.appendChild(item);
        }
    }
}
