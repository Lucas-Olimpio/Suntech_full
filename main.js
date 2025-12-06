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
});