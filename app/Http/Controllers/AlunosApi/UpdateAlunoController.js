import alunosModel from "../../../Models/alunosModel.js";

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

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;

  const id = request.params.id;

  const requestBody = request.body;
  const nome = requestBody.nome;
  const turma_id = requestBody.turma_id;

  const data = {};

  if (nome !== undefined) {
    data["nome"] = nome;
  }

  if (turma_id !== undefined) {
    data["turma_id"] = turma_id;
  }

  if (Object.keys(data).length === 0) {
    return response.status(HTTP_STATUS.BAD_REQUEST).json({
      error: "Nenhum campo para atualizar",
    });
  }

  try {
    const [rowsAffected] = await alunosModel.update(
      {
        nome: nome
      },
      {
        where: {
          id: id
        },
        returning: true
      }
    );
    if (rowsAffected === 0) {
      return response.status(HTTP_STATUS.NOT_FOUND).json({
        error: "Aluno não encontrado",
      });
    }

    return response.status(HTTP_STATUS.SUCCESS).json(row);
  } catch (error) {
    return response.status(HTTP_STATUS.SERVER_ERROR).json({
      error: "Erro interno do servidor",
    });
  }
};