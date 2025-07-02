import responsaveisModel from "../../../Models/responsaveisModel.js";

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const { nome, data_nascimento, email, telefone, aluno_id } = request.body;

  // Validação simples
  if (!nome || !data_nascimento || !email || !telefone || !aluno_id) {
    return response.status(HTTP_STATUS.BAD_REQUEST).json({
      error: "Campos obrigatórios: nome, data_nascimento, email, telefone, aluno_id"
    });
  }

  try {
    const novoResponsavel = await responsaveisModel.create({
      nome,
      data_nascimento,
      email,
      telefone,
      aluno_id
    });

    return response.status(HTTP_STATUS.SUCCESS_CREATED).json(novoResponsavel);
  } catch (error) {
    console.error("Erro ao inserir responsável:", error);
    return response.status(HTTP_STATUS.SERVER_ERROR).json({
      error: "Erro interno do servidor"
    });
  }
};
