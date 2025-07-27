const primaryColorScheme = ""; // "light" | "dark"

function getPreferTheme() {
  const currentTheme = localStorage.getItem("theme");
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
  if (themeValue === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

// set early so no page flashes / CSS is made aware
reflectPreference();

function setupThemeToggle() {
  // Remove any existing listeners to prevent duplicates
  const themeBtn = document.querySelector("#theme-btn");
  if (themeBtn) {
    // Clone the button to remove all event listeners
    const newThemeBtn = themeBtn.cloneNode(true);
    themeBtn.parentNode.replaceChild(newThemeBtn, themeBtn);
    
    // Add fresh event listener
    newThemeBtn.addEventListener("click", () => {
      themeValue = themeValue === "light" ? "dark" : "light";
      setPreference();
    });
  }
  
  // Initial reflection
  reflectPreference();
}

window.onload = () => {
  setupThemeToggle();
};

// Reinitialize after page navigation
document.addEventListener("astro:after-swap", () => {
  themeValue = getPreferTheme(); // Refresh theme value from storage
  setupThemeToggle();
});

// sync with system changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: isDark }) => {
  themeValue = isDark ? "dark" : "light";
  setPreference();
});