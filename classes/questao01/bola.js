class bola{
    constructor(){
        this._cor = "";
        this._circunferencia = 0.0;
        this._material  = ""; 
    }

    trocarCor(cor){
        this._cor = cor;
    }
    mostrarCor(){
     return   this._cor;
    }

}