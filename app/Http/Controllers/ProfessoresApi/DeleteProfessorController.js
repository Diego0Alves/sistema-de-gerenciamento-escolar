import professoresModel from '../../Models/ProfessoresModel.js';

//@openapi({
//  tags: ["Professores"],
//  summary: "Delete an existing Professor",
//  description: "Delete a professor by ID.",
//  parameters: [
//    {
//      name: "id",
//      in: "path",
//      required: true,
//      description: "ID of the professor to delete",
//      schema: {
//        type: "string",
//      },
//    },
//  ],
//  responses: {
//    200: {
//      description: "Professor deleted successfully",
//    },
//    404: {
//      description: "Professor not found",
//    },
//  },
//})

export default class DeleteProfessorController {
  static async handle(request, response) {
    const { id } = request.params;

    try {
      const professor = await professoresModel.findByPk(id);

      if (!professor) {
        return response.status(404).json({ message: "Professor not found" });
      }

      // Check if the professor is associated with any turmas
      const turmas = await turmasModel.findAll({
        where: { professorId: id },
      });

      if (turmas.length > 0) {
        return response.status(400).json({
          message: "Cannot delete professor with associated turmas",
        });
      }

      // Delete the professor
      await professoresModel.destroy({ where: { id } });

      return response.status(200).json({ message: "Professor deleted successfully" });
    } catch (error) {
      console.error("Error deleting professor:", error);
      return response.status(500).json({ message: "Internal server error" });
    }
  }
}