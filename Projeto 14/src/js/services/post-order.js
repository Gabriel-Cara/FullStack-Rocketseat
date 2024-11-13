import "../modules/modal.js";
import { getOrders } from "./get-orders.js";

// Função para cadastrar as encomendas
export async function postOrder(event) {
  event.preventDefault();

  const ownerName = document.getElementById('owner-name').value;
  const houseNumber = document.getElementById('house-number').value;
  const identifierCode = document.getElementById('identifier-code').value.toUpperCase();
  const dateReceived = new Date().toLocaleDateString('pt-BR');

  const order = {
    ownerName,
    houseNumber,
    identifierCode,
    dateReceived,
    securityCode: generateSecurityCode(),
    status: 'em processamento'
  };

  await fetch('http://localhost:3000/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  });
  
  sendWhatsAppNotification(order.ownerName, order.houseNumber, order.securityCode);
  document.getElementById('form-create').reset();

  closeModal(modalCreate); // Fechar modal após o cadastro
  getOrders(); // Atualizar lista de mercadorias
}

function generateSecurityCode() {
  return Math.floor(1000 + Math.random() * 9000);  // Gera um código de 4 dígitos
}

function sendWhatsAppNotification(ownerName, houseNumber, securityCode) {
  alert(`Notificação enviada para ${ownerName} na casa ${houseNumber}. \nCódigo de retirada: ${securityCode}"`);
}