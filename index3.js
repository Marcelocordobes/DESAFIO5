var cantidadDeGatos = 10;
    var cantidadDePasos = 4;
    var pasosAImprimir = ''
    var check = 1
    
    for (let x = 1; x <= cantidadDePasos; x++) {
      pasosAImprimir = pasosAImprimir + '🐾'
    }

    for(let x = 1; x <= cantidadDeGatos; x++) {
        if(check == 1) {
          console.log('Gato #' + x + ': 🐈 ' + pasosAImprimir)
          check++
        } else {
          console.log('Gato #' + x + ': 🐈‍⬛ ' + pasosAImprimir)
          check = 1
        }
      }