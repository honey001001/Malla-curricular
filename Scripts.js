document.addEventListener("DOMContentLoaded", () => {
  const semestres = document.querySelectorAll(".semestre");

  semestres.forEach((semestre, index) => {
    const ramos = semestre.querySelectorAll("li");

    ramos.forEach(ramo => {
      ramo.addEventListener("click", () => {
        ramo.classList.toggle("aprobado");

        // Verifica si todos los ramos del semestre están marcados
        const total = ramos.length;
        const marcados = semestre.querySelectorAll("li.aprobado").length;

        if (marcados === total) {
          const siguiente = document.getElementById(`sem${index + 2}`);
          if (siguiente && siguiente.classList.contains("bloqueado")) {
            siguiente.classList.remove("bloqueado");
          }
        }
      });
    });
  });
});
