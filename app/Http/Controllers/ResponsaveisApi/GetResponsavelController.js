import responsaveisModel from "../../../Models/responsaveisModel";

export default class GetResponsavelController {
  async handle(request, response) {
    const { id } = request.params;

    try {
      const responsavel = await responsaveisModel.findByPk(id);

      if (!responsavel) {
        return response.status(404).json({ error: "Responsável não encontrado" });
      }

      return response.status(200).json(responsavel);
    } catch (error) {
      console.error("Erro ao buscar responsável:", error);
      return response.status(500).json({ error: "Erro interno do servidor" });
    }
  }
}