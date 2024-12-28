// Express
import express from "express";

// Routes
import { routes } from "./routes";

// Error
import { errorHandling } from "./middlewares/error-handling";

const PORT = 3333
const app = express();

app.use(express.json());
app.use(routes);

app.use(errorHandling);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));