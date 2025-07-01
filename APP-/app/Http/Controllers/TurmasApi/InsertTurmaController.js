import turmasModel from "../../../Models/turmasModel.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const { nome } = request.body;

  // Validação simples
  if (!nome) {
    return response.status(HTTP_STATUS.BAD_REQUEST).json({
      error: "Campos obrigatórios: nome"
    });
  }

  try {
    const novaTurma = await turmasModel.create({
      nome
    });

    return response.status(HTTP_STATUS.CREATED).json(novaTurma);
  } catch (error) {
    console.error("Erro ao inserir turma:", error);
    return response.status(HTTP_STATUS.SERVER_ERROR).json({
      error: "Erro interno do servidor"
    });
  }
};