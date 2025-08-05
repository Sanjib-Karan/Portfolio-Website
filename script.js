function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let logoSwitched = false;

function toggleLogoText() {
  const el = document.getElementById("logo-text");
  // el.textContent = logoSwitched ? "Portfolio" : " Sanjib ";
  logoSwitched = !logoSwitched;
}

  const name = "Sanjib"; // you can fetch this from user input or API
  const firstLetter = name.charAt(0).toUpperCase();
  document.getElementById("profilePic").textContent = firstLetter;