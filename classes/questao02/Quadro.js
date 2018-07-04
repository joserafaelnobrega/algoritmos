class Quadro{

    constructor(){
        this._tamanhoDoLado = 0.0;
    }

    mudarvalordolado(valor){
        this._tamanhoDoLado = valor;
    }

    retornarvalordolado(){
        return this._tamanhoDoLado;
    }

    calcularArea(){
       return this._tamanhoDoLado*this._tamanhoDoLado;
        
    }
}
