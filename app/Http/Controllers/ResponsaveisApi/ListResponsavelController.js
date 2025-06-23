import responsaveisModel from "../../../Models/responsaveisModel";
import alunosModel from "../../../Models/alunosModel";

const ListResponsavelController = {
  async handle(req, res) {
    try {
      const responsaveis = await responsaveisModel.findAll({
        include: [{ model: alunosModel, as: "aluno" }],
      });
      return res.status(200).json(responsaveis);
    } catch (error) {
      console.error("Erro ao listar responsáveis:", error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  },
};

export default ListResponsavelController;