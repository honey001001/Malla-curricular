function marcar(ramo) {
  // Marca o desmarca un ramo (tacha o quita el tachado)
  ramo.classList.toggle("aprobado");

  const semestre = ramo.closest(".semestre");
  const total = semestre.querySelectorAll("li").length;
  const aprobados = semestre.querySelectorAll("li.aprobado").length;

  // Si todos los ramos del semestre están marcados, desbloquea el siguiente
  if (aprobados === total) {
    const siguiente = obtenerSiguienteSemestre(semestre.id);
    if (siguiente && siguiente.classList.contains("bloqueado")) {
      siguiente.classList.remove("bloqueado");
    }
  }
}

function obtenerSiguienteSemestre(idActual) {
  const numero = parseInt(idActual.replace("sem", ""));
  const siguiente = document.getElementById(`sem${numero + 1}`);
  return siguiente;
}
