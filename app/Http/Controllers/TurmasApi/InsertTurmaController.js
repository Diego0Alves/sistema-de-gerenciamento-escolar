import turmasModel from "../../../Models/turmasModel";

export default class InsertTurmaController {
  async handle(request, response) {
    const { nome, descricao, dataInicio, dataFim } = request.body;

    try {
      const newTurma = await turmasModel.create({
        nome,
        descricao,
        dataInicio,
        dataFim
      });

      return response.status(201).json(newTurma);
    } catch (error) {
      console.error("Erro ao inserir turma:", error);
      return response.status(500).json({ error: "Erro ao inserir turma" });
    }
  }
}