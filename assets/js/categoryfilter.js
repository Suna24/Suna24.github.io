const buttons = document.querySelectorAll(".filter-button");
const sections = document.querySelectorAll("#projects > section");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    // Remove 'active' class from all buttons
    buttons.forEach((btn) => btn.classList.remove("active"));

    // Add 'active' class to the clicked button
    button.classList.add("active");

    sections.forEach((section) => {
      if (filter === "all" || section.classList.contains(filter)) {
        section.style.display = "flex";
      } else {
        section.style.display = "none";
      }
    });
  });
});
