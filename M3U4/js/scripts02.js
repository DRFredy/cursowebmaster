function contarCaracteres(txtElId, resultElId) {
  var texto = document.getElementById(txtElId).value;
  var resultEl = document.getElementById(resultElId);

  resultEl.value = texto.length;
}