function Moto(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
}

const motoDoIgor = new Moto("XRE 300", "Honda", 2009, 2008);
const motoDoThiago = new Moto("Fat Boy", "Harley-Davidson", 1989, 1988);

console.log(motoDoIgor);
console.log(motoDoThiago);
