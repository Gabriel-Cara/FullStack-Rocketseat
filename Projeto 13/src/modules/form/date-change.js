import { schedulesDay } from "../schedules/load.js";

// Seleciona o input de data
const selectedDate = document.querySelector("#date");

// Recarrega a lista de horários quando o input de data for alterado.
selectedDate.onchange = () => schedulesDay()