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
}

// set early so no page flashes / CSS is made aware
reflectPreference();

window.onload = () => {
  function setThemeFeature() {
    reflectPreference();
    document.querySelector("#theme-btn")?.addEventListener("click", () => {
      themeValue = themeValue === "light" ? "dark" : "light";
      setPreference();
    });
  }
  setThemeFeature();

  // Whenever the user explicitly chooses light mode
  document.querySelector("#theme-btn")?.addEventListener("click", () => setThemeFeature());

  // Whenever the user explicitly chooses dark mode
  document.querySelector("#theme-btn")?.addEventListener("click", () => setThemeFeature());

  // Whenever the user explicitly chooses to respect the OS preference
  document.querySelector("#theme-btn")?.addEventListener("click", () => setThemeFeature());
};

// sync with system changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: isDark }) => {
  themeValue = isDark ? "dark" : "light";
  setPreference();
});