import alunosModel from "../../../Models/alunosModel.js";

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

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const { nome, data_nascimento, responsavel_id, turma_id } = request.body;

  // Validação simples
  if (!nome || !data_nascimento || !responsavel_id || !turma_id) {
    return response.status(HTTP_STATUS.BAD_REQUEST).json({
      error: "Campos obrigatórios: nome, data_nascimento, responsavel_id, turma_id"
    });
  }

  try {
    const novoAluno = await alunosModel.create({
      nome,
      data_nascimento,
      responsavel_id,
      turma_id
    });

    return response.status(HTTP_STATUS.SUCCESS_CREATED).json(novoAluno);
  } catch (error) {
    console.error("Erro ao inserir aluno:", error);
    return response.status(HTTP_STATUS.SERVER_ERROR).json({
      error: "Erro interno do servidor"
    });
  }
};