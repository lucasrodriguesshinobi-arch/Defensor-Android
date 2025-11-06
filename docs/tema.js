// ========= DEFENSOR ANDROID - SCRIPT PRINCIPAL =========
// Arquivo centralizado com funcionalidades comuns do site

// ===== MENU RESPONSIVO =====
function initMobileMenu() {
  const btn = document.getElementById("btnMenu");   // Botão hambúrguer
  const menu = document.getElementById("menu");     // Menu de navegação
  
  if (btn && menu) {
    // Adiciona evento de clique no botão hambúrguer
    btn.addEventListener("click", () => {
      menu.classList.toggle("open");                 // Alterna classe 'open'
      const open = menu.classList.contains("open");   // Verifica se está aberto
      btn.setAttribute("aria-expanded", open);        // Atualiza atributo de acessibilidade
    });
  }
}

// ===== NAVEGAÇÃO DA LOGO =====
function initLogoNavigation() {
  const logoBtn = document.getElementById("logoBtn"); // Logo clicável
  
  if (logoBtn) {
    logoBtn.style.cursor = "pointer";                   // Define cursor como pointer
    
    // Adiciona evento de clique na logo para voltar ao início
    logoBtn.addEventListener("click", () => {
      window.location.href = "index.html#inicio";       // Redireciona para página inicial
    });
  }
}

// ===== SISTEMA DE TEMA CLARO/ESCURO =====
function initThemeToggle() {
  const themeBtn = document.getElementById("themeBtn"); // Botão de tema
  
  if (themeBtn) {
    // Função para atualizar o ícone do botão baseado no tema atual
    const updateThemeIcon = () => {
      const isLight = document.body.classList.contains("light-mode"); // Verifica tema atual
      themeBtn.textContent = isLight ? "☀️" : "🌙";                    // Atualiza ícone
    };
    
    // Atualiza o ícone ao carregar a página (com pequeno delay)
    setTimeout(updateThemeIcon, 10);
    
    // Adiciona evento de clique no botão de tema
    themeBtn.addEventListener("click", () => {
      const isLight = document.body.classList.toggle("light-mode"); // Alterna tema
      localStorage.setItem("theme", isLight ? "light" : "dark");   // Salva preferência
      updateThemeIcon();                                            // Atualiza ícone
    });
  }
}

// ===== APLICAÇÃO DO TEMA SALVO =====
function applyStoredTheme() {
  const savedTheme = localStorage.getItem("theme"); // Recupera tema salvo
  if (savedTheme === "light") {                     // Se for modo claro
    document.body.classList.add("light-mode");      // Aplica classe do modo claro
  }
}

// ===== INICIALIZAÇÃO =====
// Executa quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
  applyStoredTheme();    // Aplica tema salvo primeiro
  initMobileMenu();      // Inicializa menu responsivo
  initLogoNavigation();  // Inicializa navegação da logo
  initThemeToggle();     // Inicializa alternador de tema
});

// Aplica tema imediatamente (antes do DOM carregar completamente)
applyStoredTheme();