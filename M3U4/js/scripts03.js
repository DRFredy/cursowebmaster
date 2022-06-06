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
  var aprobs = alumnos.filter(alumno => alumno.nota >= 7);
  
  arreglo.forEach(function(al){
    var cls = aprobs.find(aa => aa.nombre == al.nombre) ? 'aprobado' : 'desaprobado';
    listaItems += `<li 
      ${conColor ? ` class="${cls}"` : ''}>
      ${al.nombre}
      ${conNota ? ` (${al.nota})` : ''}
      </li>`;
  });

  var lista = `<ul>${listaItems}</ul>`;

  divEl.innerHTML = lista;  
}