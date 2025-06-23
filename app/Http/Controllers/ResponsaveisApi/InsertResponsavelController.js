import responsaveisModel from "../../../Models/responsaveisModel";

export default class InsertResponsavelController {
  async handle(request, response) {
    const { nome, email, telefone, alunoId } = request.body;

    // Verifica se o aluno existe
    const aluno = await responsaveisModel.findByPk(alunoId);
    if (!aluno) {
      return response.status(404).json({ error: "Aluno não encontrado" });
    }

    // Insere o novo responsável
    const responsavel = await responsaveisModel.create({
      nome,
      email,
      telefone,
      alunoId,
    });

    return response.status(201).json(responsavel);
  }
}