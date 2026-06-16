/*
  Theme and language controller.
  The page is served as static HTML, so language changes reload the page and
  lang.js translates hydrated Svelte content after it appears.
*/

(function () {
  var theme = getStored("theme") || "dark";
  applyTheme(theme);

  function browserLang() {
    try {
      var lang = (navigator.language || navigator.userLanguage || "").slice(0, 2);
      return lang === "ca" || lang === "es" || lang === "en" ? lang : null;
    } catch (e) {
      return null;
    }
  }

  var urlLang = new URLSearchParams(location.search).get("lang");
  var lang = normalizeLang(urlLang || getStored("lang") || browserLang() || "es");
  applyLang(lang);
})();

function normalizeLang(value) {
  return value === "ca" || value === "en" ? "ca" : "es";
}

function getStored(key) {
  try {
    return window.localStorage ? window.localStorage.getItem(key) : null;
  } catch (error) {
    return null;
  }
}

function setStored(key, value) {
  try {
    if (window.localStorage) window.localStorage.setItem(key, value);
    return true;
  } catch (error) {
    return false;
  }
}

function applyTheme(value) {
  var isLight = value === "light";
  document.documentElement.classList.toggle("light", isLight);

  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", isLight ? "#f5f5f5" : "#181818");

  document.querySelectorAll("[data-theme]").forEach(function (button) {
    button.classList.toggle("active", button.dataset.theme === value);
  });

  setStored("theme", value);
}

function applyLang(value) {
  var lang = normalizeLang(value);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-lang]").forEach(function (button) {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  var loadTranslator = function () {
    if (document.querySelector('script[data-lang-script="translator"]')) return;
    var script = document.createElement("script");
    script.src = "lang.js";
    script.dataset.langScript = "translator";
    document.body.appendChild(script);
  };

  if (document.readyState === "complete") {
    loadTranslator();
  } else {
    window.addEventListener("load", loadTranslator, { once: true });
  }
}

function setLang(value) {
  var lang = normalizeLang(value);
  var stored = setStored("lang", lang);
  if (stored) {
    location.reload();
    return;
  }

  var url = new URL(location.href);
  url.searchParams.set("lang", lang);
  location.href = url.toString();
}

window.toggleTheme = applyTheme;
window.setLang = setLang;
