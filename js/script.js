const { state, t, applyTranslations } = window.portfolioI18n;

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
