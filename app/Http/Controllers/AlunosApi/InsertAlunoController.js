import alunosModel from "../../../Models/alunosModel";

//@openapi({
//  tags: ["Alunos"],
//  summary: "Insert a new Aluno",
//  description: "Create a new aluno in the system.",
//  requestBody: {
//    required: true,
//    content: {
//      "application/json": {
//        schema: {
//          $ref: "#/components/schemas/Aluno",
//        },
//      },
//    },
//  },
//  responses: {
//    201: {
//      description: "Aluno created successfully",
//      content: {
//        "application/json": {
//          schema: {
//            $ref: "#/components/schemas/Aluno",
//          },
//        },
//      },
//    },
//    400: {
//      description: "Invalid request body",
//    },
//  },
//});

export default class InsertAlunoController {
  static async handle(request, response) {
    const { nome, email, telefone, responsavelId, turmaId } = request.body;

    try {
      // Validate required fields
      if (!nome || !email || !responsavelId || !turmaId) {
        return response.status(400).json({ message: "Missing required fields" });
      }

      // Create new aluno
      const newAluno = await alunosModel.create({
        nome,
        email,
        telefone,
        responsavelId,
        turmaId,
      });

      return response.status(201).json(newAluno);
    } catch (error) {
      console.error("Error creating aluno:", error);
      return response.status(500).json({ message: "Internal server error" });
    }
  }
}