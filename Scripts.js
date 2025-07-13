function marcar(ramo) {
  // Permite marcar múltiples ramos sin bloquear interacción
  ramo.classList.toggle("aprobado");

  const semestre = ramo.closest(".semestre");
  const total = semestre.querySelectorAll("li").length;
  const aprobados = semestre.querySelectorAll("li.aprobado").length;

  if (aprobados === total) {
    const siguiente = obtenerSiguiente(semestre.id);
    if (siguiente && siguiente.classList.contains("bloqueado")) {
      siguiente.classList.remove("bloqueado");
    }
  }
}

function obtenerSiguiente(idActual) {
  const numero = parseInt(idActual.replace("sem", ""));
  const siguiente = document.getElementById(`sem${numero + 1}`);
  return siguiente;
}
