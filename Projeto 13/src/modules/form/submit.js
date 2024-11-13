import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector(".form");
const clientName = document.querySelector("#client");
const selectedDate = document.querySelector("#date");

// Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a data miníma como sendo a data atual.
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async event => {
  // Previne o comportamento padrão de recarregar a página
  event.preventDefault()

  try {
    // Recuperando o nome do cliente.
    const name = clientName.value.trim();

    if(!name) {
      return alert("Informe o nome do cliente.")
    }

    // Recupera o horário selecionado.
    const hourSelected = document.querySelector(".hour-selected");

    if(!hourSelected) {
      return alert("Selecione um horário.")
    }

    // Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":");

    // Insere a hora da data.
    const when = dayjs(selectedDate.value).add(hour, "hour")

    // Gera um ID
    const id = new Date().getTime()

    // Faz o agendamento
    await scheduleNew({ id, name, when })

    // Recarrega os agendamentos do dia
    await schedulesDay()

    // Limpar o input de nome do cliente
    clientName.value = ""
  } catch(error) {
    alert("Não foi possível cadastrar o agendamento.")
    console.log(error);
  }
}