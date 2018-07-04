class retangulo{

    constructor(){
        this._LadoA = 0.0;
        this._LadoB = 0.0;
    }

    mudarvalordoslados(l1,l2){
        this._LadoA = l1;
        this._LadoB = l2;
    }

    retornarvalor(){
        return this._LadoA+","+this._LadoB;
    }

        calcularArea(){
            return this._LadoA*this._LadoB;
        }

        calcularPerimetro(){
            return 2*(this._LadoA+this._LadoB);
        }
    
}