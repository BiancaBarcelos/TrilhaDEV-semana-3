/*Questão 1*/

function calcularConta(event) {


    event.preventDefault();
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let operadoresMatematicos = document.getElementById("operadoresMatematicos").value;
    
    if (numero1 !== "" && numero2 !== ""){

        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);

        if (operadoresMatematicos === "adicao") {
            valor = numero1 + numero2;
            document.getElementById("frase").innerHTML = `O resultado da operação ${numero1} + ${numero2} é ${valor}`
        }else if (operadoresMatematicos === "subtracao") {
            valor = numero1 - numero2;
            document.getElementById("frase").innerHTML = `O resultado da operação ${numero1} - ${numero2} é ${valor}`
        }else if (operadoresMatematicos === "divisao") {
            valor = numero1 / numero2;
            document.getElementById("frase").innerHTML = `O resultado da operação ${numero1} / ${numero2} é ${valor}`

        }else if (operadoresMatematicos === "multiplicacao") {
            valor = numero1 * numero2;
            document.getElementById("frase").innerHTML = `O resultado da operação ${numero1} * ${numero2} é ${valor}`
        }
    }else {
        alert("Preencha todos os campos indicados!");
    }
}

function selecionaOpcao(event) {

    event.preventDefault();

    let opcao_usuario = parseInt(document.getElementById("seleciona").value);

    switch (opcao_usuario) {
        case 1:
            document.getElementById("fraseMenu").innerHTML = "Opção selecionada: Cadastrar Produto";
            console.log("Opção selecionada: Cadastrar Produto");
            break;
        case 2:
            document.getElementById("fraseMenu").innerHTML = "Opção selecionada: Listar Produtos";
            console.log("Opção selecionada: Listar Produtos");
            break;
        case 3:
            document.getElementById("fraseMenu").innerHTML = "Opção selecionada: Entrada de Estoque";
            console.log("Opção selecionada: Entrada de Estoque");
            break;
        case 4:
            document.getElementById("fraseMenu").innerHTML = "Opção selecionada: Saída de Estoque";
            console.log("Opção selecionada: Saída de Estoque");
            break;
        default:
            alert("Opção Inválida. Informe uma opção válida!")
            break;
    }
}