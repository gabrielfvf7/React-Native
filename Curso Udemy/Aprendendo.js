//Tipos de variaveis
var text = "Curso javascript";
var int = 12;
var float = 5.5;
var boolean = false;
var array = ["Arroz", "Feijão", "Macarrão"];
var automoveis = Array();
automoveis['carros'] = ['Fiat Palio', 'Fiat Punto', 'Honda Civic', 'Honda Fit'];
automoveis['motos'] = ['Yamaha 1','Yamaha 2','Suzuki 1','Suzuki 2'];

document.write(automoveis['carros'][3]);

//Formas de escrita
alert(int);
document.write(int);
console.log(int);

//testando funções
var largura = prompt("Digite largura");
var comprimento = prompt("Digite comprimento");
function area(largura,comprimento){
	var area = largura * comprimento;
  return area;
  }
document.write(area(largura,comprimento));

var t = 'oi';
if(t == 'oi'){
		let t = 'xau<br>'; //let só tem o valor dentro do bloco de código dela, aqui no exemplo ,será o if
    document.write(t); //printa xau
    }
    document.write(t); //imprime oi

//OO
class Animal{
		constructor(cor,peso){
    	this.cor = cor;
      this.peso = peso;
    }

    dormir(){
    	document.write(" Dormindo<br>");
    }
}

class Cao extends Animal{

		constructor(cor, peso, raca){
    	super(cor, peso);
      this.raca = raca;
    }

    latir(){
    	document.write("Latindo<br>");
    }

    dormir(raça){
    	document.write(this.raca);
      super.dormir();
    }

    getPeso(){
    	return this.peso;
    }

    setPeso(peso){
    	this.peso = peso;
      alert("Novo peso é: "+this.peso);
    }
}

class Ave extends Animal{

    voar(){
    	document.write("Voando<br>");
    }

    dormir(raca){
   	 document.write(raca);
   	 super.dormir();
    }
}

var dog = new Cao("Preto", 12, "Pug"); dog.dormir(); dog.latir();
var gordo = dog.getPeso();
dog.setPeso(15);
var ave = new Ave(); ave.voar(); ave.dormir("Papagaio");

var objLiteral = {
	cor: "Marrom",
  peso: 30,
  raca: "Labrador",
  filhotes: {f1: "Rex", f2: "Doug"}
};
document.write(objLiteral.filhotes.f1);

var objJSON = '{"cor": "Marrom", "peso": 30, "raca": "Labrador"}';
var obj = JSON.parse(objJSON);
document.write(obj.cor);

[a, b, c, d] = [10, 15, 40, 75];
document.write(a);
