document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggleBtn");
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("main");

    toggleBtn.addEventListener("click", function () {
      sidebar.classList.toggle("open");
      main.classList.toggle("shift");
    });
  });