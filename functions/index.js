const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.checkValor = functions.database.ref('/temp')
    .onUpdate(event => {
      // crea objeto con mensaje a ser guardado
      const nuevoDato = {
          msg: ''
      };
      // obtiene el valor de la temperatura que se ha modificado
      var temperatura = event.after.val();
      // valida si el valor es mayor a 45 para poner alarma, caso contrario es normal
      if (temperatura>=45){
        nuevoDato.msg = "Alarma T="+temperatura+" C"; // asigna el mensaje como alarma
      }else{
        nuevoDato.msg = "Temp Normal T="+temperatura+" C"; // asigna el mensaje como normal
      }
      
      const snapshot = admin.database().ref('/funcion').set(nuevoDato); // actualiza el valor en el registro 'funcion' con el nuevo dato

      return snapshot; // regresa una respuesta de la transaccion realizada
    });