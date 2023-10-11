function calcula() {
    let peso = document.getElementById('input-label1').value;
    let altura = document.getElementById('input-label2').value;
    let numPeso = parseFloat(peso);
    let numAltura = parseFloat(altura);

    if (!isNaN(numPeso) && !isNaN(numAltura)) {
        console.log('Converteu', numPeso, numAltura);
        const contaFinalizada = peso / (altura * altura);
        const resultado = document.querySelector('.Resultado');
        resultado.innerHTML = contaFinalizada.toFixed(2);
    } else {
        console.log('Não Converteu');
    }
}

calcula();
