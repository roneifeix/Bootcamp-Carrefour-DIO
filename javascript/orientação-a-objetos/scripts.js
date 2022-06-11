let show = false;

function showMenu() {
    let navMenu = document.getElementById("nav-options");

    if (show == false) {
        navMenu.style.visibility = 'visible';
        show = true;
    } else {
        navMenu.style.visibility = 'hidden';
        show = false;
    }
}

function exibeCadastroConta() {
    let box = document.getElementById('box');

    if (show) {
        let conteudo = '<form action="" method="">' +
            '<div>' +
            '<h3>Agência: 001</h3>' +
            '</div>' +
            '<div class="flexbox">' +
            '<label>Selecione o tipo de Conta: </label>' +
            '<select name="" id="" style="font-size: 1.2rem;">' +
            '<option value="corrente">Conta Corrente</option>' +
            '<option value="poupanca">Conta Poupança</option>' +
            '<option value="universitaria">Conta Universitária</option>' +
            '</select>' +
            '</div>' +
            '<div>' +
            '<h4>Número da Conta: 000001</h4>' +
            '</div>' +
            '<div class="flexbox">' +
            '<h4>Titular da Conta: </h4>' +
            '<input type="text" name="" id="">' +
            '</div>' +
            '<div>' +
            '<h5>Saldo Inicial: R$ 0,00</h5>' +
            '</div>' +
            '<button type="submit">Criar</button>' +
            '</form>';
        box.insertAdjacentHTML('afterbegin', conteudo);
    } else {
        box.removeChild('form');
    }
    // ---
    showMenu();
}