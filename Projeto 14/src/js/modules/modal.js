// Tags
import { body, btnModalCreate, btnModalTake, modalCreate, modalTake } from "../utils/tags.js";

// Função para abrir um modal
export function openModal(modal) {
  modal.showModal();
  body.style.filter = 'blur(6px)';
}

// Função para fechar um modal
function closeModal(modal) {
  modal.close();
  body.style.filter = 'none';
}

// Eventos para abrir os modais
btnModalCreate.addEventListener('click', () => openModal(modalCreate));
btnModalTake.forEach((modal) => {
  modal.addEventListener('click', () => openModal(modalTake));
})

// Fechar o modal ao clicar fora do conteúdo do modal
window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    closeModal(event.target);
  }
});

// Evento para fechar modal clicando a tecla ESC
modalCreate.addEventListener('cancel', () => closeModal(modalCreate));
modalTake.addEventListener('cancel', () => closeModal(modalTake));