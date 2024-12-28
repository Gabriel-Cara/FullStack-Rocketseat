// Knex
import { knex as knexConfig } from "knex";

// Config
import config from "../../knexfile";

export const knex = knexConfig(config);