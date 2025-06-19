import alunosModel from "../../../Models/alunosModel";

//@openapi({
//  tags: ["Alunos"],
//  summary: "Delete an existing Aluno",
//  description: "Remove an aluno from the system.",
//  parameters: [
//    {
//      name: "id",
//      in: "path",
//      required: true,
//      description: "ID of the aluno to delete",
//      schema: {
//        type: "string",
//      },
//    },
//  ],
//  responses: {
//    204: {
//      description: "Aluno deleted successfully",
//    },
//    404: {
//      description: "Aluno not found",
//    },
//  },
//});

export default class DeleteAlunoController {
  static async handle(request, response) {
    const { id } = request.params;

    try {
      const aluno = await alunosModel.findByPk(id);

      if (!aluno) {
        return response.status(404).json({ message: "Aluno not found" });
      }

      await aluno.destroy();
      return response.status(204).send();
    } catch (error) {
      console.error("Error deleting aluno:", error);
      return response.status(500).json({ message: "Internal server error" });
    }
  }
}