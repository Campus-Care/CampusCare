const issueSelect = document.getElementById("issueSelect");
const logoSection = document.getElementById("logoSection");
const formSection = document.getElementById("formSection");

issueSelect.addEventListener("change", () => {
  if (issueSelect.value) {
    // fade out logos
    logoSection.style.opacity = "0";
    setTimeout(() => {
      logoSection.classList.add("hidden");
      formSection.classList.remove("hidden");
      formSection.style.opacity = "1";
    }, 500);
  }
});
