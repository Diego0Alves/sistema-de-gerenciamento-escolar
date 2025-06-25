import alunosModel from "../../../Models/alunosModel.js";

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

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;

  const id = request.params.id;

  try {
    const row = await alunosModel.findByPk(id);

    if (row === null) {
      return response.status(HTTP_STATUS.NOT_FOUND).json({
        error: "Aluno não encontrado",
      });
    }

    return response.status(HTTP_STATUS.SUCCESS).json(row);

  } catch (error) {
    console.error("Erro ao buscar aluno:", error);
    return response.status(HTTP_STATUS.SERVER_ERROR).json({
      error: "Erro interno do servidor",
    });
  }
};