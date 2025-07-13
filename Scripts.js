// Controla la cantidad de ramos por semestre para desbloquear el siguiente
const requisitosPorSemestre = {
  sem1: 4,
  sem2: 3,
  sem3: 2,
  sem4: 2,
};

const completados = {
  sem1: 0,
  sem2: 0,
  sem3: 0,
};

function marcarAprobado(elemento) {
  if (elemento.classList.contains('aprobado')) return;

  elemento.classList.add('aprobado');

  const semestreId = elemento.closest('.semestre').id;
  completados[semestreId]++;

  if (completados[semestreId] >= requisitosPorSemestre[semestreId]) {
    const siguiente = obtenerSiguiente(semestreId);
    if (siguiente) {
      document.getElementById(siguiente).classList.remove('bloqueado');
    }
  }
}

function obtenerSiguiente(semestreId) {
  const orden = ['sem1', 'sem2', 'sem3', 'sem4'];
  const index = orden.indexOf(semestreId);
  return orden[index + 1] || null;
}
