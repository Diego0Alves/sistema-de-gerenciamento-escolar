import responsaveisModel from "../../../Models/responsaveisModel";

export default class DeleteResponsavelController {
  async handle(request, response) {
    const { id } = request.params;

    try {
      // Verifica se o responsável existe
      const responsavel = await responsaveisModel.findByPk(id);
      if (!responsavel) {
        return response.status(404).json({ error: "Responsável não encontrado" });
      }

      // Exclui o responsável
      await responsaveisModel.destroy({ where: { id } });

      return response.status(200).json({ message: "Responsável excluído com sucesso" });
    } catch (error) {
      console.error("Erro ao excluir responsável:", error);
      return response.status(500).json({ error: "Erro ao excluir responsável" });
    }
  }
}