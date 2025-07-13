function marcar(ramo) {
  if (ramo.classList.contains("aprobado")) return;

  ramo.classList.add("aprobado");

  const semestre = ramo.closest(".semestre");
  const totalRamos = semestre.querySelectorAll("li").length;
  const ramosAprobados = semestre.querySelectorAll("li.aprobado").length;

  // Si después de marcar este, todos están aprobados
  if (ramosAprobados === totalRamos) {
    const siguiente = obtenerSiguienteSemestre(semestre.id);
    if (siguiente) {
      siguiente.classList.remove("bloqueado");
    }
  }
}

function obtenerSiguienteSemestre(idActual) {
  const idNum = parseInt(idActual.replace("sem", ""));
  const siguienteId = `sem${idNum + 1}`;
  return document.getElementById(siguienteId);
}
