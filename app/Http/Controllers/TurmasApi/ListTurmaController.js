import turmasModel from "../../../Models/turmasModel";

export default class ListTurmaController {
  async handle(request, response) {
    try {
      const turmas = await turmasModel.findAll();

      if (turmas.length === 0) {
        return response.status(404).json({ error: "Nenhuma turma encontrada" });
      }

      return response.status(200).json(turmas);
    } catch (error) {
      console.error("Erro ao listar turmas:", error);
      return response.status(500).json({ error: "Erro ao listar turmas" });
    }
  }
}   