function isNumeric(n) { 
  return !isNaN(parseFloat(n)) && isFinite(n); 
}


function validarEntradaNumerica(val) {
  if(!isNumeric(val) && val != 'Backspace') {    
    return false;
  }

  return true;
}

function calcularMedioTransporte(evt) {

  if(!validarEntradaNumerica(evt.target.value)) {
    evt.preventDefault();

    return 'Valor no válido: Sólo se permiten caracteres numéricos. Revise la distancia ingresada.';
  }

  let transp = '';
  let dist = evt.target.value;
 
  if(dist < 1000) {
    transp = 'pie';
  }
  else if(dist < 10000) {
    transp = 'bicicleta';
  }
  else if(dist < 30000) {
    transp = 'colectivo';
  }
  else if(dist < 100000) {
    transp = 'auto';
  }
  else {
    transp = 'avión';
  }

  return transp;
}

function mayorEnArray(arreglo) {
  return Math.max.apply(null, arreglo);
}

function setearTextoEnArrayElem(nombreEl, arreglo) {
  var resElem = document.getElementById(nombreEl);

  resElem.value = mayorEnArray(arreglo);
}

function agregarNumAArrayElem(nombreEl, nombreElArreglo, arreglo) {
  var txtElem = document.getElementById(nombreEl);
  var txtElemArray = document.getElementById(nombreElArreglo);

  arreglo.push(txtElem.value);

  txtElemArray.value = '[';
  for(var i = 0; i < arreglo.length; i++) {
    txtElemArray.value += arreglo[i] + ',';    
  }

  txtElemArray.value = txtElemArray.value.substring(0, txtElemArray.value.length - 1);
  txtElemArray.value += ']';
}