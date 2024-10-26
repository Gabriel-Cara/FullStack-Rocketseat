// List / items
const list = document.querySelector(".list");
let items = list.querySelectorAll(".item");

// Buttons
const addedNotification = document.querySelector(".added");
const deletedNotification = document.querySelector(".deleted");
const btnCloseAdd = addedNotification.querySelector("#btn-close");
const btnCloseDelete = deletedNotification.querySelector("#btn-close");

// Form components
const form = document.querySelector("form");
const input = document.querySelector("#item");
const btnAddNewItem = document.querySelector("#btn-add");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  addNewItem();
})

items.forEach((item) => addDeleteEvent(item));

// Botão de fechar notificação
btnCloseAdd.addEventListener("click", () => {
  addedNotification.classList.toggle("hide");
});
// Botão de fechar notificação
btnCloseDelete.addEventListener("click", () => {
  deletedNotification.classList.toggle("hide");
});

// Function to add a new item on list 
function addNewItem() {
  newItem = createNewItem();


  if (newItem === undefined) {
    return;
  }
  
  items = [...items, newItem];
  addDeleteEvent(newItem);

  addedNotification.classList.remove("hide");
}

// Function to create a new li item
function createNewItem() {
  const item = input.value;

  if (item !== "") {
    const itemElement = document.createElement("li");
    itemElement.classList.add("item");
    itemElement.innerHTML = `
      <label class="checkbox-container">
        <input class="custom-checkbox" type="checkbox">
        <span class="checkmark"></span>
      </label>
      <p>${item}</p>
      <img class="btn-delete" src="assets/icons/trash.svg" alt="" />
    `;
  
    list.appendChild(itemElement);
  
    input.value = "";

    return itemElement;
  } else {
    alert("Insira o nome do item para adicionar na lista");
    return;
  }
}

// Function to add a event listener of deleting press button
function addDeleteEvent(item) {
  item.addEventListener("click", (e) => {

    if (e.target.classList.contains("btn-delete")) {
      const index = Array.from(items).indexOf(item);
      items = [...items]

      if (index >= 0 && index <= items.length) {
        items.splice(index, 1)

        item.remove();

        deletedNotification.classList.remove("hide");
      } else {
        alert("Erro ao tentar remover item da lista");
        return;
      }
    }
  });
}