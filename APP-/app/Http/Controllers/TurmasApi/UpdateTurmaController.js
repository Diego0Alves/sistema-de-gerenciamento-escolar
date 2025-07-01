import turmasModel from "../../../Models/turmasModel.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;

  const id = request.params.id;

  const nome = requestBody.nome;

  const data = {};

  if (nome !== undefined) data.nome = nome;

  if (Object.keys(data).length === 0) {
    return response.status(HTTP_STATUS.BAD_REQUEST).json({
      error: "Nenhum campo para atualizar",
    });
  }

  try {
    const [rowsAffected] = await turmasModel.update(
      data,
      {
        where: {
          id: id
        },
        returning: true
      }
    );
    if (rowsAffected === 0) {
      return response.status(HTTP_STATUS.NOT_FOUND).json({
        error: "Turma não encontrada",
      });
    }

    return response.status(HTTP_STATUS.SUCCESS).json(row);
  } catch (error) {
    return response.status(HTTP_STATUS.SERVER_ERROR).json({
      error: "Erro interno do servidor",
    });
  }
};