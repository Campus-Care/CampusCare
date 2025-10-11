document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = form.querySelector('input[type="email"]');
  const passwordInput = form.querySelector('input[type="password"]');

  // Email: any subdomain before iitr.ac.in
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.iitr\.ac\.in$/i;

  // Bare minimum password: ≥6 chars, 1 letter, 1 number
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate IITR email
    if (!emailRegex.test(email)) {
      alert("Please use an IITR email (e.g. user@me.iitr.ac.in).");
      return;
    }

    // Validate password
    if (!passwordRegex.test(password)) {
      alert("Password must be at least 6 characters long and include both letters and numbers.");
      return;
    }

    // Successful login → redirect
    window.location.href = "home.html";
  });
});
