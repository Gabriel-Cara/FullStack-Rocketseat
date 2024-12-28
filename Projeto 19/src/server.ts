import express, { Request, Response } from "express"
import { knex } from "./database/knex"
import { request } from "http"

const app = express()
app.use(express.json())

// Create Course
app.post("/courses", async (request: Request, response: Response) => {
  const { name } = request.body;

  await knex("courses").insert({ name });
  
  return response.status(201).json();
})

// List Courses
app.get("/courses", async (request: Request, response: Response) => {
  const courses = await knex("courses").select();
  
  return response.json(courses);
})

// Update Course
app.put("/courses/:id", async (request: Request, response: Response) => {
  const { id } = request.params;
  const { name } = request.body;

  await knex("courses").update({ name }).where({ id });

  return response.json()
})

// Delete Course
app.delete("/courses/:id", async (request: Request, response: Response) => {
  const { id } = request.params;

  await knex("courses").delete().where({ id });

  return response.json()
})

// List Modules
app.get("/modules", async (request: Request, response: Response) => {
  const modules = await knex("course_modules").select();
  
  return response.json(modules);
})

// Create Module
app.post("/modules", async (request: Request, response: Response) => {
  const { name, course_id } = request.body;

  await knex("course_modules").insert({ name, course_id });
  
  return response.status(201).json();
})

// List Course Modules
app.get(
  "/courses/:id/modules",
  async (request: Request, response: Response) => {
    const courses = await knex("courses")
    .select("course_modules.id", "course_modules.name AS module", "courses.id AS id_course", "courses.name AS course")
    .join("course_modules", "courses.id", "course_modules.course_id");

    return response.json(courses);
  }
)

app.listen(3333, () => console.log(`Server is running on port 3333`));