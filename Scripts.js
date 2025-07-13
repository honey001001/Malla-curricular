function marcar(ramo) {
  if (ramo.classList.contains("aprobado")) return;
  ramo.classList.add("aprobado");

  const semestre = ramo.closest(".semestre");
  const total = semestre.querySelectorAll("li").length;
  const aprobados = semestre.querySelectorAll("li.aprobado").length;

  if (aprobados === total) {
    const siguiente = semestre.nextElementSibling;
    if (siguiente && siguiente.classList.contains("bloqueado")) {
      siguiente.classList.remove("bloqueado");
    }
  }
}
