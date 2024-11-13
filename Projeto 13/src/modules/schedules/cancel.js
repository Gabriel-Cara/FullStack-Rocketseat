import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";

const periods = document.querySelectorAll(".period");

// Gera evento de click para cada lista (manhã, tarde e noite).
periods.forEach(period => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtém o elemento pai do elemento clicado (li).
      const item = event.target.closest("li");

      // Pega o id com base no data-id
      const { id } = item.dataset;
      console.log(id);
      

      // Verifica se o id foi encontrado.
      if(id) {
        // Pede confirmação para cancelar o agendamento.
        const isConfirmed = confirm("Tem certeza que deseja cancelar o agendamento?");

        // Se sim, cancela o agendamento.
        if(isConfirmed) {
          // Cancela o agendamento.
          await scheduleCancel({ id })
          schedulesDay();
        } 
      }
    }
  })
})
