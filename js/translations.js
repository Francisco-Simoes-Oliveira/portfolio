(() => {
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
        "Stacks organizadas por area para construir produtos digitais completos.",
      "skills.category.frontend": "Front-end",
      "skills.category.frontendDesc":
        "Interfaces modernas, responsivas e focadas em usabilidade.",
      "skills.category.backend": "Back-end",
      "skills.category.backendDesc":
        "APIs e regras de negocio com foco em desempenho e manutencao.",
      "skills.category.mobile": "Mobile",
      "skills.category.mobileDesc":
        "Desenvolvimento de interfaces mobile multiplataforma.",
      "skills.category.database": "Banco de Dados",
      "skills.category.databaseDesc":
        "Modelagem e consultas para dados relacionais.",
      "skills.category.tools": "Ferramentas",
      "skills.category.toolsDesc":
        "Fluxo de trabalho, versionamento e design de interfaces.",

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
      "skills.subtitle":
        "Stacks organized by area to build complete digital products.",
      "skills.category.frontend": "Front-end",
      "skills.category.frontendDesc":
        "Modern and responsive interfaces focused on usability.",
      "skills.category.backend": "Back-end",
      "skills.category.backendDesc":
        "APIs and business logic focused on performance and maintainability.",
      "skills.category.mobile": "Mobile",
      "skills.category.mobileDesc":
        "Cross-platform mobile interface development.",
      "skills.category.database": "Databases",
      "skills.category.databaseDesc":
        "Modeling and querying relational data efficiently.",
      "skills.category.tools": "Tools",
      "skills.category.toolsDesc":
        "Workflow, version control and interface design tooling.",

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
      "education.subtitle":
        "Academic background and continuous specialization.",
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

    const languageToggle = document.getElementById("language-toggle");
    if (languageToggle) {
      languageToggle.textContent = state.language === "pt-BR" ? "EN" : "PT";
    }
  }

  window.portfolioI18n = {
    state,
    translations,
    t,
    applyTranslations,
  };
})();
