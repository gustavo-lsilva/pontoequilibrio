//primeira parte

function calccmv() {
    var precocusto = parseFloat(document.getElementById('custo').value);
    var precovenda = parseFloat(document.getElementById('venda').value);
    var testevalid = document.getElementById("resultado").value = (precocusto / precovenda) - 1;
    var ret = document.getElementById("resultado").value = (precocusto / precovenda) * 100;

    if (testevalid > 0) {
        alert("ERRO: Valor de Custo não pode ser maior que Valor de Venda")

        document.getElementById('resultado').value = ""
    }
}

function umreal() {
    parseFloat(document.getElementById("custo").value = "1.00");
    var bloq = document.getElementById('custo');
    bloq.disabled = true;
}

function aberto() {
    document.getElementById('custo').value = "";
    var bloq = document.getElementById('custo');
    bloq.disabled = false;
}

//segunda parte

function calcmargem() {
    var precocusto = parseFloat(document.getElementById('custo').value);
    var precovenda = parseFloat(document.getElementById('venda').value);
    var alimp = parseFloat(document.getElementById('imposto').value);
    if (!alimp) { alert("Aliq de Imposto não pode estar vazio") };
    var alcom = parseFloat(document.getElementById('comissao').value);
    if (!alcom) { alcom = 0 };
    var algar = parseFloat(document.getElementById('garcom').value);
    if (!algar) { algar = 0 };
    var alcmv = parseFloat(document.getElementById("resultado").value = (precocusto / precovenda) * 100);
    var lucro = parseFloat(document.getElementById('lucrodesejado').value);
    if (!lucro) { lucro = 0};

    var totalvariavel = parseFloat(document.getElementById('totalcustovar').value = (alimp + alcom + algar + alcmv + lucro));

    var margemcontribuicao = parseFloat(document.getElementById('margemcontribuicao').value = 100 - totalvariavel);

    alert("estou na segunda parte")

    if (margemcontribuicao < 20) {alert('ATENÇÃO: Margem de Contribuição muito baixa')};
}

//terceira parte

function encarg() {
    var sal = parseFloat(document.getElementById('salarios').value);

    parseFloat(document.getElementById("encargos").value = sal * 1.32);

    if (!sal) {
        alert("Atenção: Informe valor de Salário")

    }

}

//Calculo Final
function finalcalc() {
    var lucro = parseFloat(document.getElementById("lucrodesejado").value);
    var margem = parseFloat(document.getElementById("margemcontribuicao").value);
    
    var aluguel = parseFloat(document.getElementById("aluguel").value);
    if (!aluguel) {aluguel = 0}
    var luz = parseFloat(document.getElementById("luz").value);
    if (!luz) {luz = 0}
    var agua = parseFloat(document.getElementById("agua").value);
    if (!agua) {agua = 0}
    var contabilidade = parseFloat(document.getElementById("contabilidade").value);
    if (!contabilidade) {contabilidade = 0}
    var materialcopa = parseFloat(document.getElementById("materialcopa").value);
    if (!materialcopa) {materialcopa = 0}
    var software = parseFloat(document.getElementById("software").value);
    if (!software) {software = 0}
    var materiallimpeza = parseFloat(document.getElementById("materiallimpeza").value);
    if (!materiallimpeza) {materiallimpeza = 0}
    var salarios = parseFloat(document.getElementById("salarios").value);
    if (!salarios) {salarios = 0}
    var encargos = parseFloat(document.getElementById("encargos").value);
    if (!encargos) {encargos = 0}
    var beneficios = parseFloat(document.getElementById("beneficios").value);
    if (!beneficios) {beneficios = 0}
    var grafica = parseFloat(document.getElementById("grafica").value);
    if (!grafica) {grafica = 0}
    var internet = parseFloat(document.getElementById("internet").value);
    if (!internet) {internet = 0}
    var telefone = parseFloat(document.getElementById("telefone").value);
    if (!telefone) {telefone = 0}
    var outras = parseFloat(document.getElementById("outras").value);
    if (!outras) {outras = 0}

    var total = parseFloat(document.getElementById("totalfixo").value =
        (aluguel +
        luz +
        agua +
        contabilidade +
        materialcopa +
        software +
        materiallimpeza +
        salarios +
        encargos +
        beneficios +
        grafica +
        internet +
        telefone +
        outras));

    parseFloat(document.getElementById("eqsemlucro").value = total / ((margem - lucro)/100));

    var valorvenda = parseFloat(document.getElementById('venda').value);
    var eqlucro = parseFloat(document.getElementById("eqcomlucro").value = total / (margem/100));

    parseFloat(document.getElementById('eqcomercial').value = (eqlucro / valorvenda));
 
    alert("Calculado")
}