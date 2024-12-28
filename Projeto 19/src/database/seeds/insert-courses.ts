import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("courses").insert([
        { name: "HTML" },
        { name: "CSS" },
        { name: "React" },
        { name: "Node.js" },
        { name: "Git" },
        { name: "Github" },
        { name: "Express.js" },
        { name: "Banco de Dados" },
    ]);
};
