const state = {
  language: "pt-BR",
};

const translations = {
  "pt-BR": {
    "nav.home": "Inicio",
    "nav.projects": "Projetos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contato",
    "nav.hire": "Contrate-me",

    "hero.available": "Disponivel para novos projetos",
    "hero.title":
      "Criando solucoes digitais <span class='highlight'>impactantes</span> e modernas",
    "hero.description":
      "Desenvolvo experiencias digitais com foco em resultado, performance e clareza visual.",
    "hero.ctaProjects": "Ver Projetos",
    "hero.exp": "anos de experiencia",

    "skills.title": "Minhas Habilidades",
    "skills.subtitle":
      "Tecnologias que uso para transformar ideias em produtos reais.",

    "projects.title": "Projetos Selecionados",
    "projects.subtitle":
      "Uma amostra de produtos criados para web e negocios digitais.",
    "projects.featured.nutripet.title": "NutriPet",
    "projects.featured.nutripet.description":
      "Site para venda do dispenser inteligente NutriPet, focado em facilitar a alimentacao de pets com tecnologia e praticidade.",
    "projects.featured.memory.title": "Jogo da Memoria",
    "projects.featured.memory.description":
      "Um jogo da memoria interativo desenvolvido para treinar raciocinio e concentracao, com interface simples e divertida.",
    "projects.featured.viewProject": "Ver projeto",
    "projects.featured.viewRepo": "Ver repositorio",
    "projects.githubTitle": "Repositorios do GitHub",
    "projects.repoDetails": "Ver repositorio",
    "projects.repoNoDescription": "Sem descricao disponivel.",
    "projects.repoError": "Nao foi possivel carregar os repositorios agora.",

    "education.title": "Educacao",
    "education.subtitle": "Formacao academica e especializacoes continuas.",
    "education.card1course": "Engenharia de Software",
    "education.card1desc":
      "Foco em arquitetura de software, qualidade e engenharia de requisitos.",
    "education.card2course": "Tecnico em Informatica",
    "education.card2desc":
      "Curso tecnico integrado com dedicacao as tecnicas de desenvolvimento e infraestrutura.",
    "education.institution": "Instituicao:",
    "education.year": "Ano:",

    "contact.title": "Contato",
    "contact.name": "Nome",
    "contact.email": "Email",
    "contact.subject": "Assunto",
    "contact.message": "Mensagem",
    "contact.send": "Enviar",
    "contact.infoTitle": "Informacoes",
    "contact.phone": "Telefone:",
    "contact.location": "Localizacao:",
    "contact.namePlaceholder": "Seu nome",
    "contact.emailPlaceholder": "seu@email.com",
    "contact.subjectPlaceholder": "Assunto da mensagem",
    "contact.messagePlaceholder": "Conte mais sobre seu projeto",

    "footer.copy": "Todos os direitos reservados.",
    "footer.terms": "Termos",
    "footer.privacy": "Privacidade",

    "form.required": "Este campo e obrigatorio.",
    "form.emailInvalid": "Digite um email valido.",
    "form.messageShort": "A mensagem deve ter pelo menos 12 caracteres.",
    "form.success": "Mensagem enviada com sucesso!",
  },

  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "nav.hire": "Hire Me",

    "hero.available": "Available for new projects",
    "hero.title":
      "Building <span class='highlight'>impactful</span> and modern digital solutions",
    "hero.description":
      "I build digital experiences focused on results, performance and visual clarity.",
    "hero.ctaProjects": "View Projects",
    "hero.exp": "years of experience",

    "skills.title": "My Skills",
    "skills.subtitle": "Technologies I use to turn ideas into real products.",

    "projects.title": "Selected Projects",
    "projects.subtitle":
      "A sample of products built for web and digital business.",
    "projects.featured.nutripet.title": "NutriPet",
    "projects.featured.nutripet.description":
      "Landing page for the NutriPet smart feeder, focused on making pet feeding easier with technology and practicality.",
    "projects.featured.memory.title": "Memory Game",
    "projects.featured.memory.description":
      "An interactive memory game designed to train reasoning and concentration, with a simple and playful interface.",
    "projects.featured.viewProject": "View project",
    "projects.featured.viewRepo": "View repository",
    "projects.githubTitle": "GitHub Repositories",
    "projects.repoDetails": "View repository",
    "projects.repoNoDescription": "No description available.",
    "projects.repoError": "Could not load repositories right now.",

    "education.title": "Education",
    "education.subtitle": "Academic background and continuous specialization.",
    "education.card1course": "Software Engineering",
    "education.card1desc":
      "Focus on software architecture, quality and requirements engineering.",
    "education.card2course": "Technical Degree in Informatics",
    "education.card2desc":
      "Integrated technical program focused on development techniques and infrastructure.",
    "education.institution": "Institution:",
    "education.year": "Year:",

    "contact.title": "Contact",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send",
    "contact.infoTitle": "Info",
    "contact.phone": "Phone:",
    "contact.location": "Location:",
    "contact.namePlaceholder": "Your name",
    "contact.emailPlaceholder": "your@email.com",
    "contact.subjectPlaceholder": "Message subject",
    "contact.messagePlaceholder": "Tell me more about your project",

    "footer.copy": "All rights reserved.",
    "footer.terms": "Terms",
    "footer.privacy": "Privacy",

    "form.required": "This field is required.",
    "form.emailInvalid": "Enter a valid email.",
    "form.messageShort": "The message must be at least 12 characters.",
    "form.success": "Message sent successfully!",
  },
};

function t(key) {
  return translations[state.language][key] || key;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = t(element.dataset.i18nHtml);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  document.documentElement.lang = state.language === "pt-BR" ? "pt-BR" : "en";
  document.getElementById("language-toggle").textContent =
    state.language === "pt-BR" ? "EN" : "PT";
}

function setupSmoothScroll() {
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const targetElement = document.querySelector(targetId);
      if (!targetElement) {
        return;
      }

      event.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });

      document.getElementById("nav-links").classList.remove("open");
    });
  });
}

function setupMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

function setupNavbarBlurOnScroll() {
  const navbar = document.querySelector(".navbar");

  function updateNavbar() {
    if (window.scrollY > 12) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  updateNavbar();
  window.addEventListener("scroll", updateNavbar);
}

function setupFadeInObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll(".fade-in").forEach((section) => {
    observer.observe(section);
  });
}

function setupLanguageToggle() {
  const button = document.getElementById("language-toggle");

  button.addEventListener("click", () => {
    state.language = state.language === "pt-BR" ? "en" : "pt-BR";
    applyTranslations();
    renderGithubProjects(window.cachedRepos || []);
  });
}

function setupThemeToggle() {
  const button = document.getElementById("theme-toggle");

  button.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

function setupFormValidation() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    const fields = [
      { input: name, error: document.getElementById("name-error") },
      { input: email, error: document.getElementById("email-error") },
      { input: subject, error: document.getElementById("subject-error") },
      { input: message, error: document.getElementById("message-error") },
    ];

    fields.forEach(({ error }) => {
      error.textContent = "";
    });
    status.textContent = "";

    let valid = true;

    fields.forEach(({ input, error }) => {
      if (!input.value.trim()) {
        error.textContent = t("form.required");
        valid = false;
      }
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() && !emailRegex.test(email.value.trim())) {
      document.getElementById("email-error").textContent =
        t("form.emailInvalid");
      valid = false;
    }

    if (message.value.trim() && message.value.trim().length < 12) {
      document.getElementById("message-error").textContent =
        t("form.messageShort");
      valid = false;
    }

    if (!valid) {
      return;
    }

    status.textContent = t("form.success");
    status.style.color = "#18834a";
    form.reset();
  });
}

function renderGithubProjects(repos) {
  const container = document.getElementById("github-projects");

  if (!repos.length) {
    container.innerHTML = `<p>${t("projects.repoError")}</p>`;
    return;
  }

  container.innerHTML = repos
    .map((repo) => {
      const description = repo.description || t("projects.repoNoDescription");

      return `
        <article class="github-card">
          <h4>${repo.name}</h4>
          <p>${description}</p>
          <a class="github-link" href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${t("projects.repoDetails")}</a>
        </article>
      `;
    })
    .join("");
}

async function loadGithubProjects() {
  const username = document.body.dataset.githubUser || "octocat";
  const endpoint = `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error("Erro ao carregar repositorios");
    }

    const repos = await response.json();
    const selected = repos.filter((repo) => !repo.fork).slice(0, 6);

    window.cachedRepos = selected;
    renderGithubProjects(selected);
  } catch (error) {
    window.cachedRepos = [];
    renderGithubProjects([]);
  }
}

function init() {
  applyTranslations();
  setupSmoothScroll();
  setupMobileMenu();
  setupNavbarBlurOnScroll();
  setupFadeInObserver();
  setupLanguageToggle();
  setupThemeToggle();
  setupFormValidation();
  loadGithubProjects();
}

document.addEventListener("DOMContentLoaded", init);
