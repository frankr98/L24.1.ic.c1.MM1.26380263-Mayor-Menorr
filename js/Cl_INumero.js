export default class Cl_INumero{
    leerNumero1(){
        return prompt("Introduce el primer numero");
    }
    leerNumero2(){
        return prompt("Introduce el segundo numero");
    }
    leerNumero3(){
        return prompt("Introduce el tercer numero");
    }

    reporteNumero(n1,n2,n3,m){
        return`
        <h1>----NUMERO MAYOR----</h1>
        <br> LOS NÚMEROS PROCESADOS SON: ${n1}, ${n2},${n3}
        <h2> El numero mayor es: ${m} </h2> 
        `
    }
}