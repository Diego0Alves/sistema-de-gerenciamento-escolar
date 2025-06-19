import alunosModel from "../../../Models/alunosModel";

//@openapi({
//  tags: ["Alunos"],
//  summary: "Get Aluno by ID",
//  description: "Retrieve a single aluno by their unique ID.",
//  parameters: [
//    {
//      name: "id",
//      in: "path",
//      required: true,
//      description: "ID of the aluno to retrieve",
//      schema: {
//        type: "string",
//      },
//    },
//  ],
//  responses: {
//    200: {
//      description: "Aluno retrieved successfully",
//      content: {
//        "application/json": {
//          schema: {
//            $ref: "#/components/schemas/Aluno",
//          },
//        },
//      },
//    },
//    404: {
//      description: "Aluno not found",
//    },
//  },
//});

export default class GetAlunoController {
  static async handle(request, response) {
    const { id } = request.params;

    try {
      const aluno = await alunosModel.findByPk(id, {
        include: ["responsavel", "turma"],
      });

      if (!aluno) {
        return response.status(404).json({ message: "Aluno not found" });
      }

      return response.status(200).json(aluno);
    } catch (error) {
      console.error("Error retrieving aluno:", error);
      return response.status(500).json({ message: "Internal server error" });
    }
  }
}