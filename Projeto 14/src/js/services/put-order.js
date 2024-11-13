import { formTake } from "../utils/tags.js";
import { getOrders } from "./get-orders.js";

export async function putOrder(event) {
  event.preventDefault();

  const identifierCode = formTake.querySelector('#identifier-code').value;
  const securityCode = formTake.querySelector('#password').value;

  const response = await fetch(`http://localhost:3000/orders?identifierCode=${identifierCode}`);
  const orders = await response.json();

  console.log(orders);

  if (orders.length === 0 || orders[0].securityCode !== parseInt(securityCode)) {
    alert('Código de segurança inválido ou order não encontrada.');
    return;
  }

  const order = orders[0];
  order.status = 'retirada';
  order.dateReceived = new Date().toLocaleString();

  await fetch(`http://localhost:3000/orders/${order.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  });

  alert(`Encomenda retirada com sucesso! Código de segurança: ${order.securityCode}`);
  document.getElementById('form-retirada').reset();

  getOrders();
}