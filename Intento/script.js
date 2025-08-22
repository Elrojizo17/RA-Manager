document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");
    const selected = dropdown.querySelector(".dropdown-selected");
    const list = dropdown.querySelector(".dropdown-list");
    const options = list.querySelectorAll("li");

  // Toggle abrir/cerrar
    selected.addEventListener("click", () => {
        list.style.display = list.style.display === "block" ? "none" : "block";
    });

  // Seleccionar opción
    options.forEach(option => {
        option.addEventListener("click", () => {
        selected.textContent = option.textContent;
        list.style.display = "none";
        });
    });

  // Cerrar si hago click fuera
    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
        list.style.display = "none";
        }
    });
});

