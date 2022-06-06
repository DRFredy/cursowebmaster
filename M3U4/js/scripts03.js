const alumnos = [
  {
    nombre: 'Juan Gomez',
    nota: 7
  }, 
  {
    nombre: 'Pedro Rodriguez',
    nota: 4
  }, 
  {
    nombre: 'Roxana García',
    nota: 8
  }, 
  {
    nombre: 'Luciano Lopez',
    nota: 5
  }, 
  {
    nombre: 'Fernanda Gimenez',
    nota: 6
  }, 
  {
    nombre: 'Florencia Martinez',
    nota: 10
  }, 
  {
    nombre: 'Raul Sanchez',
    nota: 7
  }, 
  {
    nombre: 'Sandra Figueroa',
    nota: 8
  }
];

//console.log(alumnos.length);
function mostrarAprobadosDesaprobados(contenedorId) {
  var divEl = document.getElementById(contenedorId);  

  mostrarListaEn(divEl, alumnos, true, true);
}

function mostrarAprobados(contenedorId) {
  var divEl = document.getElementById(contenedorId);
  var aprobados = alumnos.filter(alumno => alumno.nota >= 7);

  mostrarListaEn(divEl, aprobados, false, false);
}

function mostrarListaEn(divEl, arreglo, conColor, conNota) {
  var listaItems = '';
  
  arreglo.forEach(function(al){
    listaItems += '<li';
    if(conColor) {
      var aprobs = alumnos.filter(alumno => alumno.nota >= 7);
      var cls = aprobs.find(aa => aa.nombre == al.nombre) ? 'aprobado' : 'desaprobado';
      listaItems += ' class="' + cls + '"';
    }

    listaItems += '>' + al.nombre;

    if(conNota) {
      listaItems += ' (' + al.nota + ')';
    }
    listaItems += '</li>';
  });

  var lista = '<ul>{itemsLista}</ul>'.replace('{itemsLista}', listaItems);

  divEl.innerHTML = lista;  
}