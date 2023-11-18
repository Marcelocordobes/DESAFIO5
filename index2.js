var cantidadDeGatos = 5;
var cantidadDePasos = 3;
var pasosAImprimir = ''

for (let x = 1; x <= cantidadDePasos; x++) {
  pasosAImprimir = pasosAImprimir + '🐾'
}

for(let x = 1; x <= cantidadDeGatos; x++) {
   console.log('Gato #' + x + ': 🐈 ' + pasosAImprimir)
}