//Variables generales
let edad = 0;
let estatura = 0;
let peso = 0;
let TotalEncuentados = 0;
let continuar = true;
let totalImc = 0;
let totalCategoria = 0;
let totalPersonasImc = 0;
//Variables para contar personas por IMC
let cantErrorPeso = 0;
let cantPesoBajo = 0;
let cantPesoNormal = 0;
let cantPesoSuperiorNormal = 0;
let cantPesoObesidad = 0;
//Variables para contar personas por categoria
let cantErrorEdad = 0;
let cantNiños = 0;
let cantJovenes = 0;
let cantAdultos = 0;
let cantViejos = 0;


while(continuar){
    //Se realiza la captura de las variables
    edad = parseInt(prompt("Ingresar edad"));
    estatura = parseFloat(prompt("Ingresar estatura en Metros"));
    peso = parseFloat(prompt("Ingresar peso en Kg"));
    //Se invocan los métodos para calcular el IMC y validar la categoria de cada persona
    acumular_personas_categoria(edad);
    acumular_personas_imc(estatura, peso);
    TotalEncuentados += 1;
    //Se realiza la confirmación si el usuario desea continuar en el programa. Si = True No = False
    continuar = confirm("Desea seguir encuestando personas?");
}

//Se totalizan los intentos exitosos tanto de Categorias como de IMC
totalCategoria = cantNiños+cantJovenes+cantAdultos+cantViejos;
totalPersonasImc = cantPesoBajo+cantPesoNormal+cantPesoSuperiorNormal+cantPesoObesidad;

//Se imprimen cada uno de los resultados.
document.writeln("Cantidad de encuestados : " + TotalEncuentados + "<br>");
document.writeln("Cantidad intentos errados al ingresar edades negativas : " + cantErrorEdad + "<br>");
document.writeln("Cantidad de intentos errados al ingresar pesos negativos : " + cantErrorPeso + "<br>");
document.writeln("Cantidad de niños : " + cantNiños + "<br>");
document.writeln("Cantidad de Jóvenes : " + cantJovenes + "<br>");
document.writeln("Cantidad de Adultos : " + cantAdultos + "<br>");
document.writeln("Cantidad de Viejos : " + cantViejos + "<br>");
document.writeln("Porcentaje de niños : " + ((cantNiños/totalCategoria)*100) + " % <br>");
document.writeln("Porcentaje de Jóvenes : " + ((cantJovenes/totalCategoria)*100) + " % <br>");
document.writeln("Porcentaje de Adultos : " + ((cantAdultos/totalCategoria)*100) + " % <br>");
document.writeln("Porcentaje de Viejos : " + ((cantViejos/totalCategoria)*100) + " % <br>");
document.writeln("Cantidad personas con peso bajo : " + cantPesoBajo + "<br>");
document.writeln("Cantidad personas con peso normal : " + cantPesoNormal + "<br>");
document.writeln("Cantidad personas con peso superior a los normal : " + cantPesoSuperiorNormal + "<br>");
document.writeln("Cantidad personas con obesidad : " + cantPesoObesidad + "<br>");
document.writeln("Porcentaje de personas peso bajo : " + ((cantPesoBajo/totalPersonasImc)*100) + " % <br>");
document.writeln("Porcentaje de personas con peso normal : " + ((cantPesoNormal/totalPersonasImc)*100) + " % <br>");
document.writeln("Porcentaje de personas con peso superior : " + ((cantPesoSuperiorNormal/totalPersonasImc)*100) + " % <br>");
document.writeln("Porcentaje de personas con obesidad : " + ((cantPesoObesidad/totalPersonasImc)*100) + " % <br>");
document.writeln("Promedio de IMC de la población : " + (totalImc/totalPersonasImc) + "<br>");

//**************************************************** FUNCIONES ******************************************************************************** */

//Función para validar a que categoria pertenece cada persona.
//Se retorna la categoria, pero sí la edad es negativa o se ingresa un valor inválido se devulve "Error"
function validar_categoria (pEdad){
    if (pEdad>=0 && pEdad<14){
        return "Niño";
    }else{
        if (pEdad>13 && pEdad<31){
            return "Joven";
        }else{
            if (pEdad>30 && pEdad<61){
                return "Adulto";
            }else{
                if (pEdad>60){
                    return "Viejo";
                }else{
                    return "Error";
                }
                
            }
        }
    }
}

//Función para validar el IMC de cada persona.
//Se retorna el IMC, pero sí el peso es negativa o se ingresa un valor inválido se devulve "Error"
function validar_imc (IMC){
    if(IMC<0){
        return "Error";
    }else{
        if (IMC>=0 && IMC<18.5){
            return "Bajo";
        }else{
            if (IMC>18.4 && IMC<25){
                return "Normal";
            }else{
                if (IMC>24.9 && IMC<30){
                    return "Superior Normal";
                }else{
                    return "Obesidad";
                }
            }
        }
    }
}

//Función para acumular dependiendo de la categoria de las personas ingresadas
//sí la función validar_categoria devuelve "Error" se acumula en la variable cantErrorEdad
function acumular_personas_categoria(edPersona){
    switch(validar_categoria(edPersona)){
        case "Niño":
            cantNiños += 1;
            break;
        case "Joven":
            cantJovenes += 1;
            break;
        case "Adulto":
            cantAdultos += 1;
            break;
        case "Viejo":
            cantViejos += 1;
        break;
        default:
            cantErrorEdad += 1;
            break;
    }
}

//Función para acumular dependiendo del IMC de las personas ingresadas
//sí la función validar_imc devuelve "Error" se acumula en la variable cantErrorPeso
//Solo de acumula los IMC con valores >= 0 (Puede ser por que la estatura o el peso son negativos)
function acumular_personas_imc(pEstatura, pPeso){
     //Calculamos el IMC de cada persona
     var IMC = (pPeso/(pEstatura*pEstatura));

    switch(validar_imc(IMC)){
        case "Bajo":
            cantPesoBajo += 1;
            totalImc += IMC;
            break;
        case "Normal":
            cantPesoNormal += 1;
            totalImc += IMC;
            break;
        case "Superior Normal":
            cantPesoSuperiorNormal += 1;
            totalImc += IMC;
            break;
        case "Obesidad":
            cantPesoObesidad += 1;
            totalImc += IMC;
        break;
        default:
            cantErrorPeso += 1;
            break;
    }
}