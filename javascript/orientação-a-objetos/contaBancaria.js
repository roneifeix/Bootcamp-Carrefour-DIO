class ContaBancaria {
    constructor(agencia, numero, tipo, titular) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.titular = titular;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return 'Operação negada!';
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, titular, cartaoCredito) {
        super(agencia, numero, titular, cartaoCredito);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, titular) {
        super(agencia, numero, titular);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, titular) {
        super(agencia, numero, titular);
        this.tipo = 'Universitária';
    }

    sacar(valor) {
        if (valor > 500 || valor > this._saldo) {
            return 'Operação negada!'
        }

        this._saldo = this._saldo - valor;
    }
}