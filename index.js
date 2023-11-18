 var cantidadDeGatos = 10;
    var check = 1

    for(let x = 1; x <= cantidadDeGatos; x++) {
      if(check == 1) {
         console.log('Gato #' + x + ': 😺')
        check++
      } else if (check == 2) {
         console.log('Gato #' + x + ': 😸')
        check++
      } else {
         console.log('Gato #' + x + ': 😹')
        check = 1
      } } 