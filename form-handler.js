document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("whatsapp-form");
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
      const numeroEmpresa = "556993853683";

      // Construir mensagem formatada com emojis via código gerado em runtime
      // Isso evita qualquer problema de encoding do arquivo .js ou interpretação de literais
      const sun = String.fromCodePoint(0x2600);
      const bust = String.fromCodePoint(0x1F464);
      const mail = String.fromCodePoint(0x1F4E7);
      const phone = String.fromCodePoint(0x1F4F1);
      const id = String.fromCodePoint(0x1F194);
      const city = String.fromCodePoint(0x1F3D9);
      const pin = String.fromCodePoint(0x1F4CD);
      const build = String.fromCodePoint(0x1F3D7);
      const zap = String.fromCodePoint(0x26A1);
      const memo = String.fromCodePoint(0x1F4DD);
      const check = String.fromCodePoint(0x2705);

      const texto = 
        sun + ' *Novo Pedido de Orçamento - SunTech Solar* ' + sun + '\n\n' +
        bust + ' *Nome:* ' + nome + '\n' +
        mail + ' *E-mail:* ' + email + '\n' +
        phone + ' *Telefone:* ' + telefone + '\n' +
        id + ' *CPF/CNPJ:* ' + cpf + '\n' +
        city + ' *Cidade:* ' + cidade + '\n' +
        pin + ' *Endereço:* ' + endereco + '\n\n' +
        build + ' *Tipo de Projeto:* ' + tipo + '\n' +
        zap + ' *Potência Estimada:* ' + potencia + ' kWp\n\n' +
        memo + ' *Mensagem adicional:*\n' + mensagem + '\n\n' +
        check + ' *Enviado via Formulário do Site*';

      // Build URL directly using api.whatsapp.com
      var url = "https://api.whatsapp.com/send?phone=" + numeroEmpresa + "&text=" + encodeURIComponent(texto);

      // Abre o WhatsApp em nova aba
      window.open(url, "_blank");
      
      // Exibe o modal de sucesso
      const successModal = document.getElementById("success-modal");
      if (successModal) {
          successModal.classList.remove("hidden");
          
          // Reset do formulário
          contactForm.reset();
      }
    });

    // === Modal de Sucesso ===
    const closeModalBtn = document.getElementById("close-modal");
    const successModal = document.getElementById("success-modal");
    const modalOverlay = document.getElementById("modal-overlay");
  
    if (closeModalBtn && successModal) {
        // Fechar pelo botão
        closeModalBtn.addEventListener("click", () => {
            successModal.classList.add("hidden");
        });
  
        // Fechar pelo overlay
        if (modalOverlay) {
            modalOverlay.addEventListener("click", () => {
                successModal.classList.add("hidden");
            });
        }
    }
  }
});
