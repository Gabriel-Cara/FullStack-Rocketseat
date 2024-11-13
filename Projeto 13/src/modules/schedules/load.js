import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "./show.js";
import { hoursLoad } from "../form/hours-load.js";

// Seleciona o input de data
const selectedDate = document.querySelector("#date");

export async function schedulesDay() {
  // Obtém a data do input
  const date = selectedDate.value

  // Busca os agendamentos do dia na API.
  const dailySchedules = await scheduleFetchByDay({ date })

  // Exibe os agendamentos
  schedulesShow({ dailySchedules })
  
  // Renderiza as horas disponíveis.
  hoursLoad({ date, dailySchedules});
}