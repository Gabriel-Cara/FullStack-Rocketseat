// Tags
import { formCreate } from "../utils/tags.js";


const identifierCode = formCreate.querySelector("#identifier-code");

identifierCode.addEventListener("input", () => {
  identifierCode.value = identifierCode.value.toUpperCase();
})