/** crear un programa que solicite tres números enteros e indique el mayor y el menor
 * genere un reporte con los tres números y el mayor y el menor de ellos.
 */

import Cl_INumero from "./Cl_INumero.js";
import Cl_Numero from "./Cl_Numero.js";

let Inum = new Cl_INumero(),
    n1 = Inum.leerNumero1(),
    n2 = Inum.leerNumero2(),
    n3 = Inum.leerNumero3(),
    num = new Cl_Numero(n1, n2, n3),
    salida = document.getElementById("salida")
    salida.innerHTML = Inum.reporteNumero(n1, n2, n3, num.mayor())