// Cotação de moedas do dia
const USD = 5.71;
const EUR = 6.16;
const GBP = 7.40;

// Capturando os elementos HTML
const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const footer = document.querySelector("main footer");
const description = document.querySelector("#description");
const result = document.querySelector("#result");

// Manipulando o input amount para receber apenas números
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
})

// Captando o evento de submit (enviar) do formulário 
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrecy(amount.value, USD, "$");
      break;
    case "EUR":
      convertCurrecy(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrecy(amount.value, GBP, "£");
      break;
    default:
  }
}

function convertCurrecy(amount, price, symbol) {
  try {
    // Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    // Calcula o total
    let total = amount * price;

    // Formata o valor para o padrão BRL e retira o R$
    total = formatCurrencyBRL(total).replace("R$", "");

    // Exibe o resultado
    result.textContent = `${total} Reais`;

    // Aplica a classe que exibe o footer para mostrar o resultado
    footer.classList.add("show-result");

  } catch (error) {
    // Remove a classe do footer removendo ele da tela
    footer.classList.remove("show-result");
    alert("Não foi possível converter, tente novamente");
  }
}

// Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value) {
  // Formata o valor (value) em número e depois para o formatar no padrão BRL com toLocaleString (R$ 00,00)
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}