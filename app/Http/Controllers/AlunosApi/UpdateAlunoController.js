import alunosModel from "../../../Models/alunosModel";

//@openapi({
//  tags: ["Alunos"],
//  summary: "Update an existing Aluno",
//  description: "Update the details of an existing aluno.",
//  parameters: [
//    {
//      name: "id",
//      in: "path",
//      required: true,
//      description: "ID of the aluno to update",
//      schema: {
//        type: "string",
//      },
//    },
//  ],
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
//    200: {
//      description: "Aluno updated successfully",
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

export default class UpdateAlunoController {
  static async handle(request, response) {
    const { id } = request.params;
    const { nome, email, telefone, responsavelId, turmaId } = request.body;

    try {
      const aluno = await alunosModel.findByPk(id);

      if (!aluno) {
        return response.status(404).json({ message: "Aluno not found" });
      }

      // Update aluno details
      aluno.nome = nome;
      aluno.email = email;
      aluno.telefone = telefone;
      aluno.responsavelId = responsavelId;
      aluno.turmaId = turmaId;

      await aluno.save();
      return response.status(200).json(aluno);
    } catch (error) {
      console.error("Error updating aluno:", error);
      return response.status(500).json({ message: "Internal server error" });
    }
  }
}