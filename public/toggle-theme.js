const primaryColorScheme = ""; // "light" | "dark"
const currentTheme = localStorage.getItem("theme");

function getPreferTheme() {
  if (currentTheme) return currentTheme;
  if (primaryColorScheme) return primaryColorScheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

let themeValue = getPreferTheme();

function setPreference() {
  localStorage.setItem("theme", themeValue);
  reflectPreference();
}

function reflectPreference() {
  document.firstElementChild.setAttribute("data-theme", themeValue);
  document.querySelector("#theme-btn")?.setAttribute("aria-label", themeValue);
  
  // Update the visual state of the toggle button
  const themeBtn = document.querySelector("#theme-btn");
  if (themeBtn) {
    if (themeValue === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
}

// set early so no page flashes / CSS is made aware
reflectPreference();

window.onload = () => {
  // Single event listener for theme toggle
  document.querySelector("#theme-btn")?.addEventListener("click", () => {
    themeValue = themeValue === "light" ? "dark" : "light";
    setPreference();
  });
  
  // Initial reflection
  reflectPreference();
};

// sync with system changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: isDark }) => {
  themeValue = isDark ? "dark" : "light";
  setPreference();
});