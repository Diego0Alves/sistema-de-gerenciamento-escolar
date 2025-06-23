import turmasModel from "../../../Models/turmasModel";

export default class DeleteTurmaController {
  async handle(request, response) {
    const { id } = request.params;

    try {
      const turma = await turmasModel.findByPk(id);

      if (!turma) {
        return response.status(404).json({ error: "Turma não encontrada" });
      }

      await turma.destroy();
      return response.status(200).json({ message: "Turma deletada com sucesso" });
    } catch (error) {
      console.error("Erro ao deletar turma:", error);
      return response.status(500).json({ error: "Erro ao deletar turma" });
    }
  }
}