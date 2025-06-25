import turmasModel from "../../../Models/turmasModel.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;

  const id = request.params.id;

  try {
    const row = await turmasModel.findByPk(id);

    if (row === null) {
      return response.status(HTTP_STATUS.NOT_FOUND).json({
        error: "Turma não encontrada",
      });
    }

    return response.status(HTTP_STATUS.SUCCESS).json(row);

  } catch (error) {
    console.error("Erro ao buscar turma:", error);
    return response.status(HTTP_STATUS.SERVER_ERROR).json({
      error: "Erro interno do servidor",
    });
  }
};