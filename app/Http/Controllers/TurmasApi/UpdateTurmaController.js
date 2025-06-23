import turmasModel from "../../../Models/turmasModel";

export default class UpdateTurmaController {
  async handle(request, response) {
    const { id } = request.params;
    const { nome, descricao, dataInicio, dataFim } = request.body;

    try {
      const turma = await turmasModel.findByPk(id);

      if (!turma) {
        return response.status(404).json({ error: "Turma não encontrada" });
      }

      await turmasModel.update(
        { nome, descricao, dataInicio, dataFim },
        { where: { id } }
      );

      return response.status(200).json({ message: "Turma atualizada com sucesso" });
    } catch (error) {
      console.error("Erro ao atualizar turma:", error);
      return response.status(500).json({ error: "Erro ao atualizar turma" });
    }
  }
}