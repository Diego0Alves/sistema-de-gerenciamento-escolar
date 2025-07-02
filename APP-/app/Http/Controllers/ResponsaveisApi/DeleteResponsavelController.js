import responsaveisModel from "../../../Models/responsaveisModel.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;

  const id = request.params.id;

  try {
    const rowsDeleted = await responsaveisModel.destroy({
      where: { id },
    });

    if (rowsDeleted === 0) {
      return response.status(HTTP_STATUS.NOT_FOUND).json({
        error: "Responsável não encontrado",
      });
    }
    return response.status(HTTP_STATUS.SUCCESS_NO_CONTENT).send();
  } catch (error) {
    console.error("Erro ao deletar responsável:", error);
    return response.status(HTTP_STATUS.SERVER_ERROR).json({
      error: "Erro interno do servidor",
    });
  }

};