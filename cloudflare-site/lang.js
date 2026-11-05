/*
  Spanish to Catalan / English to Spanish runtime translator.
  Base content stays in Spanish/English inside index.html and the recovered Svelte
  bundle. When CA is selected, this file translates hydrated content to Catalan.
  When ES is selected, it translates English content to Spanish.
*/

try {
  (function () {
    function getStored(key) {
      try {
        return window.localStorage ? window.localStorage.getItem(key) : null;
      } catch (error) {
        return null;
      }
    }

    var urlLang = new URLSearchParams(location.search).get("lang");
    var lang = urlLang || getStored("lang") || "es";
    if (lang === "en") lang = "ca";

    var D_es = {
      "Contact me!": "¡Colaboremos!",
      "Contact me": "Colaboremos",
      "Let's collab!": "¡Colaboremos!",
      "Name": "Nombre",
      "Email Address": "Correo electrónico",
      "How can I help?": "¿En qué puedo ayudarte?",
      "Submit": "Enviar",
      "Sent!": "¡Enviado!",
      "Name is required": "El nombre es obligatorio",
      "Nombre is required": "El nombre es obligatorio",
      "Nom is required": "El nombre es obligatorio",
      "Email Address is required": "El correo electrónico es obligatorio",
      "Email is required": "El correo electrónico es obligatorio",
      "Correo electrónico is required": "El correo electrónico es obligatorio",
      "Message is required": "El mensaje es obligatorio",
      "How can I help? is required": "El mensaje es obligatorio",
      "¿En qué puedo ayudarte? is required": "El mensaje es obligatorio",
      "Please enter a valid email address": "Por favor, introduce un correo electrónico válido",
      "Must be less than 255 characters": "Debe tener menos de 255 caracteres",
      "Message must be less than 1000 characters": "El mensaje debe tener menos de 1000 caracteres",
      "Close view": "Cerrar vista",
      "Open": "Abrir",
      "Details": "Detalles",
      "Recent Work": "Trabajos recientes",
      "Projects": "Proyectos",
      "Services": "Servicios",
      "Tools": "Herramientas",
      "Validating...": "Validando..."
    };

    var D_ca = {
      "Max S.M. | Portfolio": "Max S.M. | Portafoli",
      "Portfolio de Max S.M. - Atenci\u00f3n al Cliente, Soporte T\u00e9cnico y Desarrollo Web.": "Portafoli de Max S.M. - Atenció al client, suport tècnic i desenvolupament web.",
      "Portfolio de Max S.M. \u2014 Atenci\u00f3n al Cliente, Soporte T\u00e9cnico y Desarrollo Web.": "Portafoli de Max S.M. \u2014 Atenció al client, suport tècnic i desenvolupament web.",
      "Portfolio de Max S.M. \u2014 Atenci\u00f3n al Cliente, Soporte T\u00e9cnico y Desarrollo Web. Conoce mi experiencia, proyectos y formaci\u00f3n.": "Portafoli de Max S.M. \u2014 Atenció al client, suport tècnic i desenvolupament web. Descobreix la meva experiència, projectes i formació.",
      "Roles:": "Rols:",
      "Trabajos Recientes": "Treballs recents",
      "Proyectos": "Projectes",
      "Cerrar vista": "Tancar vista",
      "Ver proyectos": "Veure projectes",
      "No hay proyectos": "No hi ha projectes",
      "Abrir": "Obrir",
      "Detalles": "Detalls",
      "Codigo": "Codi",
      "C\u00f3digo": "Codi",
      "Servicios": "Serveis",
      "Herramientas": "Eines",
      "Herramientas I use": "Eines que faig servir",
      "Tools I use": "Eines que faig servir",
      "Contactar": "Contacta'm",
      "\u00a1Colaboremos!": "Col\u00b7laborem!",
      "¡Colaboremos!": "Col\u00b7laborem!",
      "\u00bfTienes un proyecto en mente? Hablemos y hag\u00e1moslo realidad.": "Tens un projecte en ment? Parlem-ne i fem-lo realitat.",
      "Atenci\u00f3n al Cliente": "Atenció al client",
      "Soporte T\u00e9cnico": "Suport tècnic",
      "Desarrollo Web": "Desenvolupament web",
      "Dise\u00f1o UX/UI": "Disseny UX/UI",
      "Soporte T\u00e9cnico & Customer Success": "Suport tècnic i \u00e8xit del client",
      "Desarrollo Web & Frontend": "Desenvolupament web i frontend",
      "Dise\u00f1o UX/UI & Digital": "Disseny UX/UI i digital",
      "Girona, Espa\u00f1a": "Girona, Catalunya",
      "Visitar mi perfil de GitHub": "Visita el meu perfil de GitHub",
      "Visitar mi perfil de LinkedIn": "Visita el meu perfil de LinkedIn",
      "Ver mi ubicacion en Google Maps": "Veure la meva ubicaci\u00f3 a Google Maps",
      "Ver mi ubicaci\u00f3n en Google Maps": "Veure la meva ubicaci\u00f3 a Google Maps",
      "Enlace de correo": "Enlla\u00e7 de correu",
      "N\u00famero de tel\u00e9fono": "N\u00famero de tel\u00e8fon",
      "Miniatura proyecto": "Miniatura del projecte",
      "Cargando secci\u00f3n": "Carregant secció",
      "Loading section": "Carregant secció",
      "Nombre": "Nom",
      "Correo electr\u00f3nico": "Correu electrònic",
      "En que puedo ayudarte": "En què et puc ajudar?",
      "\u00bfEn qu\u00e9 puedo ayudarte?": "En què et puc ajudar?",
      "Enviar": "Envia",
      "Enviado": "Enviat",
      "¡Enviado!": "Enviat!",
      "Contactame": "Contacta'm",
      "Convirtamos tu idea en realidad": "Fem realitat la teva idea",
      "Contact me!": "Contacta'm!",
      "Let's collab!": "Contacta'm!",
      "Let's turn your idea into reality with my design experience!": "Fem realitat la teva idea amb la meva experiència en disseny!",
      "Contact me": "Contacta'm",
      "Name": "Nom",
      "Name is required": "El nom és obligatori",
      "Nombre is required": "El nom és obligatori",
      "Nom is required": "El nom és obligatori",
      "El nombre es obligatorio": "El nom és obligatori",
      "Email Address": "Correu electrònic",
      "Email Address is required": "El correu electrònic és obligatori",
      "El correo electrónico es obligatorio": "El correu electrònic és obligatori",
      "Email is required": "El correu electrònic és obligatori",
      "Correo electrónico is required": "El correu electrònic és obligatori",
      "How can I help?": "En què et puc ajudar?",
      "Message is required": "El missatge és obligatori",
      "El mensaje es obligatorio": "El missatge és obligatori",
      "How can I help? is required": "El missatge és obligatori",
      "¿En qué puedo ayudarte? is required": "El missatge és obligatori",
      "En què et puc ajudar? is required": "El missatge és obligatori",
      "Please enter a valid email address": "Introdueix una adreça electrònica vàlida",
      "Por favor, introduce un correo electrónico válido": "Introdueix una adreça electrònica vàlida",
      "Must be less than 255 characters": "Ha de tenir menys de 255 caràcters",
      "Debe tener menos de 255 caracteres": "Ha de tenir menys de 255 caràcters",
      "Message must be less than 1000 characters": "El missatge ha de tenir menys de 1000 caràcters",
      "El mensaje debe tener menos de 1000 caracteres": "El missatge ha de tenir menys de 1000 caràcters",
      "Submit": "Envia",
      "Sent!": "Enviat!",
      "View projects": "Veure projectes",
      "Recent Work": "Treballs recents",
      "Projects": "Projectes",
      "Services": "Serveis",
      "Tools": "Eines",
      "Close view": "Tancar vista",
      "Open": "Obrir",
      "Details": "Detalls",
      "Contactar": "Contacta'm",
      "Visit my GitHub profile": "Visita el meu perfil de GitHub",
      "Visit my LinkedIn profile": "Visita el meu perfil de LinkedIn",
      "View my location on Google Maps": "Veure la meva ubicació a Google Maps",
      "Email link": "Enllaç de correu",
      "Phone number": "Número de telèfon",
      "Project thumbnail": "Miniatura del projecte",
      "How can I help": "En què et puc ajudar",
      "Have a project in mind? Let's talk and make it real.": "Tens un projecte en ment? Parlem-ne i fem-lo realitat.",
      "Let's work together!": "Contacta'm!",
      "Customer Support": "Atenció al client",
      "Technical Support": "Suport tècnic",
      "Web Development": "Desenvolupament web",
      "UX/UI Design": "Disseny UX/UI",
      "Web Development & Frontend": "Desenvolupament web i frontend",
      "UX/UI & Digital Design": "Disseny UX/UI i digital",
      "Girona, Spain": "Girona, Catalunya",
      "Validating...": "Validant...",
      "Validando...": "Validant...",
      "Cataluña": "Catalunya",
      "España": "Espanya"
    };

    var D = lang === "ca" ? D_ca : D_es;

    var keys = Object.keys(D).sort(function (a, b) {
      return b.length - a.length;
    });

    function escapeRegExp(value) {
      return value.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
    }

    function tr(text) {
      var result = text;
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (result.indexOf(key) !== -1) {
          result = result.replace(new RegExp(escapeRegExp(key), "g"), D[key]);
        }
      }
      return result;
    }

    function translateAttrs(selector, attr) {
      var nodes = document.querySelectorAll(selector);
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].closest(".lang-selector-bottom")) continue;
        var value = nodes[i].getAttribute(attr);
        if (value) nodes[i].setAttribute(attr, tr(value));
      }
    }

    function translate() {
      translateAttrs("[aria-label]", "aria-label");
      translateAttrs("[title]", "title");
      translateAttrs("[alt]", "alt");
      translateAttrs("[placeholder]", "placeholder");

      var walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: function (node) {
            var parent = node.parentElement;
            if (
              !parent ||
              parent.closest(".lang-selector-bottom") ||
              parent.closest("script") ||
              parent.closest("style") ||
              parent.closest("svg")
            ) {
              return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_ACCEPT;
          }
        }
      );

      var textNode;
      while ((textNode = walker.nextNode())) {
        var current = textNode.textContent;
        var next = tr(current);
        if (next !== current) textNode.textContent = next;
      }

      document.title = tr(document.title);
      var meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", tr(meta.getAttribute("content") || ""));
    }

    translate();

    var scheduled = false;
    var observer = new MutationObserver(function () {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(function () {
        scheduled = false;
        translate();
      });
    });

    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  })();
} catch (error) {
  console.log("language error", error);
}
