import turmasModel from "../../../Models/turmasModel.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;

  const id = request.params.id;

  try {
    const rowsDeleted = await turmasModel.destroy({
      where: { id },
    });

    if (rowsDeleted === 0) {
      return response.status(HTTP_STATUS.NOT_FOUND).json({
        error: "Turma não encontrada",
      });
    }
    return response.status(HTTP_STATUS.NO_CONTENT).send();
  } catch (error) {
    console.error("Erro ao deletar turma:", error);
    return response.status(HTTP_STATUS.SERVER_ERROR).json({
      error: "Erro interno do servidor",
    });
  }

};