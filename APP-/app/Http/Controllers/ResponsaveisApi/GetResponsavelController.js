import responsaveisModel from "../../../Models/responsaveisModel.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;

  const id = request.params.id;

  try {
    const row = await responsaveisModel.findByPk(id);

    if (row === null) {
      return response.status(HTTP_STATUS.NOT_FOUND).json({
        error: "Responsável não encontrado",
      });
    }

    return response.status(HTTP_STATUS.SUCCESS).json(row);

  } catch (error) {
    console.error("Erro ao buscar responsável:", error);
    return response.status(HTTP_STATUS.SERVER_ERROR).json({
      error: "Erro interno do servidor",
    });
  }
};