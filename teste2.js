//Variáveis Pessoas
class Pessoa{
    constructor(nome, idade, sexo){
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    }
}

class Garcom extends Pessoa{
    constructor(nome, idade, sexo, garcom){
        super(nome,idade, sexo)
        this.garcom = garcom;
        }
        
    }
class Irmaos{
    constructor(individuos){
        this.individuos = individuos;
    }
}

class Universidade{
    
    constructor(nome, cursos, alunos){
        this.nome = nome;
        this.cursos = cursos;
        this.alunos = alunos;

    }
}
class Cursos {
    constructor(nome, periodos, cargaHoraria, alunos){
    this.nome = nome;
    this.periodos = periodos;
    this.cargaHoraria = cargaHoraria;
    this.alunos = alunos;
}
}
class Republica{
    constructor(nome, idade, moradores){
        this.nome = nome;
        this.idade = idade;
        this.moradores = moradores;
    }
}

 
class Pedido{
    constructor(pessoa, pedido, valor){
        this.pessoa = pessoa;
        this.pedido = pedido;
        this.valor = valor;
    }
}
class Bebida{
    constructor(coca, cerveja){
        this.coca = coca;
        this.cerveja = cerveja;
    }
}
var d = new Pessoa('Paulo', 23, "Masculino")
var c = new Pessoa('Armando', 17, "Masculino")
var p = new Pessoa('Pedro', 20, 'Masculino')
var v = new Pessoa('Ana', 17, "Feminino")
var gar = new Garcom("André","Desconhecida","Masculino","André")
var irmaos = new Irmaos([v, p])
//Variáveis Lugares
var a = new Cursos("Engenharia Mecânica", "10 períodos", "3630 horas", [v, d])
var b = new Universidade("UFOP", ["Vários outros",a], [v, d] )
var republica = new Republica('Orfanato', '10 anos', [d, c])
//var pedidos
var coca = new Bebida(5, 12)
var pedi = new Pedido([d,c,p,v],"Duas cocas e duas Cervejas",(coca.coca)*2+(coca.cerveja)*2)
//


console.log([d,c,p,v])
console.log(b)
console.log(republica)
console.log(pedi)
console.log(coca)
if(gar.garcom === 'André') {
    function checarIDs(idade, nome){
        if(idade >= 18) {
            console.log(nome + ' pode tomar cerveja')
        } else if(idade < 18) {console.log (nome + ' vai tomar Coca-Cola')}}
    } else {console.log('Não é o André')}
checarIDs(v.idade, v.nome)
checarIDs(p.idade, p.nome)
checarIDs(d.idade, d.nome)
checarIDs(c.idade, c.nome)
console.log(pedi)
function calcularTotal(valor1){
    x=valor1; console.log(`A conta deu R$${x}.00 galerinha.`)
}

function calcularIndividual(){
    y=(x/4); console.log(`Deu R$${y}0 para cada um.`)
}

 function pedirConta(){
    calcularTotal(pedi.valor);
    calcularIndividual();
}
if(v.nome || p.nome || d.nome || c.nome != "André") {pedirConta()}
else{console.log('É o André')}