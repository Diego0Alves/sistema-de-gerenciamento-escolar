import responsaveisModel from "../../../Models/responsaveisModel.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;

  const id = request.params.id;

  const requestBody = request.body;
  const nome = requestBody.nome;
  const telefone = requestBody.telefone;
  const email = requestBody.email;

  const data = {};

  if (nome !== undefined) data.nome = nome;
  if (telefone !== undefined) data.telefone = telefone;
  if (email !== undefined) data.email = email;

  if (Object.keys(data).length === 0) {
    return response.status(HTTP_STATUS.BAD_REQUEST).json({
      error: "Nenhum campo para atualizar",
    });
  }

  try {
    const [rowsAffected] = await responsaveisModel.update(
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
        error: "Responsável não encontrado",
      });
    }

    return response.status(HTTP_STATUS.SUCCESS).json(row);
  } catch (error) {
    return response.status(HTTP_STATUS.SERVER_ERROR).json({
      error: "Erro interno do servidor",
    });
  }
};