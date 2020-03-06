let edad = 0;
let estatura = 0;
let peso = 0;
let TotalEncuentados = 0;
let cantErrorEdad = 0;
let cantErrorPeso = 0;
let continuar = true;
let totalImc = 0;
let totalCategoria = 0;
let totalPersonasImc = 0;
//Variables para acumular promedio por categoria
let cantPesoBajo = 0;
let cantPesoNormal = 0;
let cantPesoSuperiorNormal = 0;
let cantPesoObesidad = 0;
//Variables para contar personas por categoria
let cantNiños = 0;
let cantJovenes = 0;
let cantAdultos = 0;
let cantViejos = 0;


while(continuar){

    edad = parseInt(prompt("Ingresar edad"));
    estatura = parseInt(prompt("Ingresar estatura en Metros"));
    peso = parseInt(prompt("Ingresar peso en Kg"));

    validar_categoria(edad);
    validar_imc(estatura, peso);
    TotalEncuentados += 1;
    continuar = confirm("Desea seguir encuestando personas?");
}

totalCategoria = cantNiños+cantJovenes+cantAdultos+cantViejos;
totalPersonasImc = cantPesoBajo+cantPesoNormal+cantPesoSuperiorNormal+cantPesoObesidad;

document.writeln("Cantidad de encuestados :" + TotalEncuentados);
document.writeln("Cantidad intentos errados al ingresar edades negativas :" + cantErrorEdad);
document.writeln("Cantidad de intentos errados al ingresar pesos negativos :" + cantErrorPeso);
document.writeln("Cantidad de niños :" + cantNiños);
document.writeln("Cantidad de Jóvenes :" + cantJovenes);
document.writeln("Cantidad de Adultos :" + cantAdultos);
document.writeln("Cantidad de Viejos :" + cantViejos);
document.writeln("Porcentaje de niños :" + ((cantNiños/totalCategoria)*100));
document.writeln("Porcentaje de Jóvenes :" + ((cantJovenes/totalCategoria)*100));
document.writeln("Porcentaje de Adultos :" + ((cantAdultos/totalCategoria)*100));
document.writeln("Porcentaje de Viejos :" + ((cantViejos/totalCategoria)*100));
document.writeln("Cantidad personas con peso bajo :" + cantPesoBajo);
document.writeln("Cantidad personas con peso normal :" + cantPesoNormal);
document.writeln("Cantidad personas con peso superior a los normal :" + cantPesoSuperiorNormal);
document.writeln("Cantidad personas con obesidad :" + cantPesoObesidad);
document.writeln("Porcentaje de personas peso bajo :" + ((cantPesoBajo/totalPersonasImc)*100));
document.writeln("Porcentaje de personas con peso normal :" + ((cantPesoNormal/totalPersonasImc)*100));
document.writeln("Porcentaje de personas con peso superior :" + ((cantPesoSuperiorNormal/totalPersonasImc)*100));
document.writeln("Porcentaje de personas con obesidad :" + ((cantPesoObesidad/totalPersonasImc)*100));
document.writeln("Promedio de IMC de la población :" + (totalImc/(cantPesoBajo+cantPesoNormal+cantPesoSuperiorNormal+cantPesoObesidad)));


//Función para calcular y contar las personas de acuerdo a su categoria
function validar_categoria (pEdad){
    if(pEdad<0){
        cantErrorEdad += 1;
    }else{
        if (pEdad>=0 && pEdad<14){
            cantNiños += 1;
        }else{
            if (pEdad>13 && pEdad<31){
                cantJovenes += 1;
            }else{
                if (pEdad>30 && pEdad<61){
                    cantAdultos += 1;
                }else{
                    cantViejos += 1;
                }
            }
        }
    }

}

//Función para calcular y contar las personas de acuerdo a su IMC
function validar_imc (pEstatura, pPeso){
    //Calculamos el IMC de cada persona
    var IMC = (pPeso/(pEstatura*pEstatura));
    if(pPeso<0){
        cantErrorPeso += 1;
    }else{
        if (IMC<18.5){
            cantPesoBajo += 1;
            totalImc += IMC;
        }else{
            if (IMC>18.4 && IMC<25){
                cantPesoNormal += 1;
                totalImc += IMC;
            }else{
                if (IMC>24.9 && IMC<30){
                    cantPesoSuperiorNormal += 1;
                    totalImc += IMC;
                }else{
                    cantPesoObesidad += 1;
                    totalImc += IMC;
                }
            }
        }
    }



}