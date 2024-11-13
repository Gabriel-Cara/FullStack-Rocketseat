"use strict";

// Tags
import { formCreate, formTake } from "./utils/tags.js";

// Modules
import "./modules/modal.js";
import "./modules/form.js";

// API
import { getOrders } from "./services/get-orders.js";
import { postOrder } from "./services/post-order.js";
import { putOrder } from "./services/put-order.js";

getOrders();

formCreate.addEventListener('submit', postOrder);
formTake.addEventListener('submit', putOrder);