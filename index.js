class Jogo{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo == "mago") {
            ataque = "magia";
        } else if (this.tipo == "guerreiro") {
            ataque = "espada";
        } else if (this.tipo == "monge") {
            ataque = "artes marciais";
        } else if (this.tipo == "ninja") {
            ataque = "shuriken";
        }

        let resultado = `O ${this.tipo} ataca usando ${ataque}`;
        return resultado;
    }
}


let meuJogo = new Jogo("Story", 13, "mago");
console.log(meuJogo.atacar());
