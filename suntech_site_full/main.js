document.addEventListener("DOMContentLoaded", function () {
  // === Menu Mobile ===
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
    });
  }

  // === Envio do formulário para o WhatsApp ===
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Captura os dados do formulário
      const nome = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const telefone = document.getElementById("phone").value.trim();
      const cpf = document.getElementById("cpf").value.trim();
      const cidade = document.getElementById("city").value.trim();
      const endereco = document.getElementById("address").value.trim();
      const tipo = document.getElementById("tipo").value;
      const potencia = document.getElementById("potencia").value.trim();
      const mensagem = document.getElementById("message").value.trim();

      // Validação simples
      if (!nome || !email || !telefone) {
        alert("Por favor, preencha pelo menos Nome, E-mail e Telefone.");
        return;
      }

      // Número do WhatsApp (com DDI 55 e DDD)
      const numeroEmpresa = "556993853683"; // só números

      // Monta a mensagem com quebras de linha
      const texto =
        `*Novo Orçamento SunTech Solar*%0A%0A` +
        `*Nome:* ${nome}%0A` +
        `*E-mail:* ${email}%0A` +
        `*Telefone:* ${telefone}%0A` +
        `*CPF/CNPJ:* ${cpf}%0A` +
        `*Cidade:* ${cidade}%0A` +
        `*Endereço:* ${endereco}%0A` +
        `*Tipo de Projeto:* ${tipo}%0A` +
        `*Potência Estimada:* ${potencia} kWp%0A%0A` +
        `*Mensagem:* ${mensagem}`;

      // Monta o link correto do WhatsApp
      const url = `https://wa.me/${numeroEmpresa}?text=${texto}`;

      // Abre o WhatsApp em nova aba
      window.open(url, "_blank"); 
    });
  }
});