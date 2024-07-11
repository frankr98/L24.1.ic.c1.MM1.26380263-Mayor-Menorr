export default class Cl_Numero{
    constructor(numero1, numero2, numero3){
        this.numero1 = numero1;
        this.numero2 = numero2;
        this.numero3 = numero3;
    }

    set numero1 (n1){
        this._numero1 = +n1;
    }

    get numero1 (){
        return this._numero1;
    }

    set numero2 (n2){
        this._numero2 = +n2;
    }

    get numero2 (){
        return this._numero2;
    }

    set numero3 (n3){
        this._numero3 = +n3;
    }

    get numero3 (){
        return this._numero3;
    }

    mayor(){
        let num = this.numero1;
        if (this.numero2 > num){
            num = this.numero2;
        }
        if (this.numero3 > num){
            num = this.numero3;
        }
        return num;
    }
    
}