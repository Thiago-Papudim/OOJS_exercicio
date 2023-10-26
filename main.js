class Veiculo {
    constructor(modelo, fabricante) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    }

    ligarMotor() {
        console.log("Motor ligado");
    }

    desligarMotor() {
        console.log("Motor desligado");
    }
}

class Moto extends Veiculo {
    constructor(modelo, fabricante, anoFabricacao) {
        super(modelo, fabricante);
        this.anoFabricacao = anoFabricacao;
    }

    empinarMoto() {
        console.log("A moto está sendo empinada.");
    }
}

class Carro extends Veiculo {
    constructor(modelo, fabricante, portas) {
        super(modelo, fabricante);
        this.portas = portas;
    }

    cavaloDePau() {
        console.log("O carro deu um cavalo de pau.");
    }
}

const motoDoIgor = new Moto("XRE 300", "Honda", 2009);

console.log(motoDoIgor);
motoDoIgor.ligarMotor();
motoDoIgor.empinarMoto();
motoDoIgor.desligarMotor();

const carroDoThiago = new Carro("SW4", "Toyota", 4);

console.log(carroDoThiago);
carroDoThiago.ligarMotor();
carroDoThiago.cavaloDePau();
carroDoThiago.desligarMotor();