import { apiConfig } from "./api-config.js";

export async function scheduleCancel({ id }) {
  try {
    // Faz a requisição para a API.
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    })

    alert("Agendamento cancelado com sucesso");
  } catch (error) {
    console.log(error);
    
    alert("Erro ao cancelar o agendamento. Tente novamente mais tarde.");
  }
}