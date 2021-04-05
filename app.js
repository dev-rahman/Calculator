// Swaps the StyleSheets to achieve DarkMode...
function switchTheme() {
  let darkMode = document.getElementById("dark-mode");
  let theme = document.getElementById("theme");

  if (theme.getAttribute("href") == "light.css") {
    theme.href = "dark.css";
    darkMode.innerHTML = "Light🌙";
  } else {
    theme.href = "light.css";
    darkMode.innerHTML = "Dark 🌙";
  }
}

// Clear the screen on Click of "C" button...
function clearScreen() {
  document.getElementById("result").value = "";
}

// Displays the entered value on screen.
function liveScreen(value) {
  document.getElementById("output").innerHTML = value;
}

function calculate(a, b, operand) {}
