// As maças custam R$ 1.30 comprando menos de uma dúzia
// E R$ 1.00 se comprarem mais que 12

// var maca = prompt("Quantas maças você quer?");

// if(maca < 12){
//     var metade = 1.30 * maca;
//     alert("Você pagou R$" + metade);
// }else{
//     var duzia = 1 * maca;
//     alert("Você comprou R$" + duzia);
// }

var foto = ['maca.png'];
function comprar(){
    var qntMacas = parseInt(document.getElementById('qntMacas').value);
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Pra não ter várias div em cima uma da outra
    document.getElementById('qntMacas').value = '' // Pra zerar o número do input

    var precoUnitario = (qntMacas <= 12) ? 1.3 : 1; // Se a qntMaca for menor que 12 o precoUnitario será 1.30 reais, caso ao contrário será 1 real
    var total = qntMacas * precoUnitario;

    if(qntMacas > 0){
        resultado.innerHTML += '<p>Você comprou ' + qntMacas + ' maçã(s)</p>';

        for (var i = 0; i < qntMacas; i++){
            resultado.innerHTML += '<img style="width:50px;" src="' + foto[0] + '">';
        }

        resultado.innerHTML += '<p> Total a pagar: $' + total.toFixed(2) + ' reais.</p>';

    } else {
        resultado.innerHTML = '<p> Quantidade de maçãs inválida </p>';  
    }
}