function adivinanza() {
    var cant_intentos = 4;
    var rta = 7;
    var acierto = false;
    var numero;
    while (cant_intentos > 0 && acierto != true) {
        cant_intentos--;
        numero = parseInt(prompt("Según su nombre, ¿cuántos colores tiene el famoso cerro ubicado en la Quebrada de Humahuaca?"));
        if (numero == rta) {
          alert("CORRECTO!!!")
          acierto = true;
        } else if (numero < rta) {
          alert(
            "PISTA: son más... Le quedan " + cant_intentos + " intentos"
          );
        } else if (numero > rta) {
          alert(
            "PISTA: son menos... Le quedan " +
            cant_intentos +
            " intentos"
          );
        } else {
          alert("Le quedan " + cant_intentos + " intentos");
        }
      }
      if (acierto==false){
          alert("Te quedaste sin intentos. Es el Cerro de los 7 Colores")
      }
  }     