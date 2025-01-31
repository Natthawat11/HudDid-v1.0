document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");
    const modalClose = document.getElementById("modal-close");
  
    const galleryItems = document.querySelectorAll(".gallery-item");
  
    galleryItems.forEach((item) => {
      item.addEventListener("click", () => {
        const img = item.querySelector("img");
        modalImage.src = img.src;
        modalDescription.textContent = item.getAttribute("data-description");
        modal.style.display = "flex";
      });
    });
  
    modalClose.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  