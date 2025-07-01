import alunosModel from "../../../Models/alunosModel.js";

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

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;

  const id = request.params.id;

  try {
    const rowsDeleted = await alunosModel.destroy({
      where: { id },
    });

    if (rowsDeleted === 0) {
      return response.status(HTTP_STATUS.NOT_FOUND).json({
        error: "Aluno não encontrado",
      });
    }
    return response.status(HTTP_STATUS.NO_CONTENT).send();
  } catch (error) {
    console.error("Erro ao deletar aluno:", error);
    return response.status(HTTP_STATUS.SERVER_ERROR).json({
      error: "Erro interno do servidor",
    });
  }

};