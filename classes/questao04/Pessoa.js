
       // var contador = 0;
       // var contadorcrescer = 0 ;
        
    class Pessoa{
        
        constructor(nome, idade, altura, peso){
            this._nome = nome;
            this._idade = idade;
            this._altura = altura;
            this._peso = peso;
        }
        envelhecer(anos){
            this._idade += anos;
             contador = anos;
        }

        engordar(){

        }
        emagrecer(){

        }

        crescer(){

                contadorcrescer =  contador;
            

            if(this._idade<21){
            this._altura += contadorcrescer*0.05;
            }
        }

        getAltura(){
      return this._altura.toFixed(2);
        }
    }
  