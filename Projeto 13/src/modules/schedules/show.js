import dayjs from "dayjs";

// Seleciona as sessões manhã, tarde e noite.
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
  try {
    // Limpar as ul
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    // Renderiza os agendamentos por período
    dailySchedules.forEach( schedule => {
      // Criando e adicionando id ao item.
      const item = document.createElement("li");
      item.setAttribute("data-id", schedule.id);

      // Criando e formatando elemento de agendamento
      const time = document.createElement("strong");
      time.textContent = dayjs(schedule.when).format("HH:mm");
      
      // Criando elemento de nome
      const name = document.createElement("span");
      name.textContent = schedule.name;

      // Criando e estilizando o elemento de cancelamento
      const cancelIcon = document.createElement("img")
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
      cancelIcon.setAttribute("alt", "Cancelar");
      cancelIcon.classList.add("cancel-icon");

      item.append(time, name, cancelIcon);

      // Obtém somente a hora
      const hour = dayjs(schedule.when).hour()

      // Adiciona o agendamento ao horário correto
      if(hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item);
      } else { 
        periodNight.appendChild(item);
      }

    } )
  } catch (error) {
    console.log(error);
    
    alert("Erro ao renderizar agendamentos")
  }
}