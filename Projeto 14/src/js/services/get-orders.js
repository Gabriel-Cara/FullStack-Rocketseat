// Tags
import { tableWorking, tableDone, modalTake } from "../utils/tags.js";

// Modules
import { openModal } from "../modules/modal.js";

// Função para buscar e exibir todas as mercadorias
export async function getOrders() {
  try {
    const response = await fetch('http://localhost:3000/orders');
    const orders = await response.json();

    tableWorking.querySelector('tbody').innerHTML = '';
    tableDone.querySelector('tbody').innerHTML = '';


    if (orders.length > 0) {
      orders.forEach(order => createOrder(order));
    } else {
      tableWorking.innerHTML = '<h2 class="empty">Nenhuma encomenda encontrada</h1>';
      tableDone.innerHTML = '<h2 class="empty">Nenhuma encomenda encontrada</h1>';
    }

  } catch (error) {
    alert("Erro ao carregar as encomendas");
    console.log(error);

    return
  }
}

function createOrder(order) {
  const type = order['status'];

  if (order['status'] === 'em processamento') {
    const tr = createTr(order, type);

    const tbody = tableWorking.querySelector('tbody');
    

    return tbody.appendChild(tr);

  } else {
    const tr = createTr(order, type)
    const tbody = tableDone.querySelector('tbody');

    return tbody.appendChild(tr);
  }
}

function createTr(order, type) {
  const tr = document.createElement('tr');

  if (type === 'em processamento') {
    tr.innerHTML = `
        <td><span class="bold">${order['ownerName']}</span>&nbsp;/ ${order['houseNumber']}</td>
        <td>${order['identifierCode']}</td>
        <td>${order['dateReceived']}</td>
        <td><button id="btn-modal-take" class="modalTake">Retirar Item</button></td>
      `;

    tr.querySelector("#btn-modal-take").addEventListener('click', () => openModal(modalTake))  
  } else {
    tr.innerHTML = `
        <td><span class="bold">${order['ownerName']}</span>&nbsp;/ ${order['houseNumber']}</td>
        <td>${order['identifierCode']}</td>
        <td>${order['dateReceived']}</td>
        <td></td>
      `;
  }
  
  return tr;
}