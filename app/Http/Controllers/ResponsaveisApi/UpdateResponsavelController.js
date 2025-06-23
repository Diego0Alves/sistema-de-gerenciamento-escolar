import responsaveisModel from "../../../Models/responsaveisModel";

export default class UpdateResponsavelController {
  async handle(request, response) {
    const { id } = request.params;
    const { nome, email, telefone, alunoId } = request.body;

    try {
      // Verifica se o responsável existe
      const responsavel = await responsaveisModel.findByPk(id);
      if (!responsavel) {
        return response.status(404).json({ error: "Responsável não encontrado" });
      }

      // Atualiza os dados do responsável
      await responsaveisModel.update(
        { nome, email, telefone, alunoId },
        { where: { id } }
      );

      return response.status(200).json({ message: "Responsável atualizado com sucesso" });
    } catch (error) {
      console.error("Erro ao atualizar responsável:", error);
      return response.status(500).json({ error: "Erro ao atualizar responsável" });
    }
  }
}