import turmasModel from "../../../Models/turmasModel";

export default class GetTurmaController {
  async handle(request, response) {
    const { id } = request.params;

    try {
      const turma = await turmasModel.findByPk(id);

      if (!turma) {
        return response.status(404).json({ error: "Turma não encontrada" });
      }

      return response.status(200).json(turma);
    } catch (error) {
      console.error("Erro ao obter turma:", error);
      return response.status(500).json({ error: "Erro ao obter turma" });
    }
  }
}