// Swaps the StyleSheets to achieve DarkMode...
function switchTheme() {
  let darkMode = document.getElementById("dark-mode");
  let theme = document.getElementById("theme");

  if (theme.getAttribute("href") == "light.css") {
    theme.href = "dark.css";
    darkMode.innerHTML = "Light🌙";
  } else {
    theme.href = "light.css";
    darkMode.innerHTML = "Dark🌙";
  }
}
