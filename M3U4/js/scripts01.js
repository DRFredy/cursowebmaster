function setEventListeners() {
  var cuadrados = document.querySelectorAll('.cuadrado');
  
  cuadrados.forEach(cuadrado => {
    cuadrado.addEventListener('click', function(e) {
      var bodyEl = document.getElementsByTagName('body')[0];
      var classNames = [];
      bodyEl.classList.forEach(function(cn) {
        classNames.push(cn);
      });

      classNames.forEach(function(cn){
        bodyEl.classList.remove(cn);
      });
      
      bodyEl.classList.add(e.target.classList[1]);
    });
  });
}