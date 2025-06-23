import professoresModel from '../../Models/ProfessoresModel.js';

//@openapi({
//    tags: ["Professores"],
//    summary: "Get a Professor by ID",
//    description: "Retrieve a professor's details by their ID.",
//    parameters: [
//        {
//        name: "id",
//        in: "path",
//        required: true,
//        description: "ID of the professor to retrieve",
//        schema: {
//            type: "string",
//        },
//        },
//    ],
//    responses: {
//        200: {
//        description: "Professor retrieved successfully",
//        content: {
//            "application/json": {
//            schema: {
//                $ref: "#/components/schemas/Professor",
//            },
//            },
//        },
//        },
//        404: {
//        description: "Professor not found",
//        },
//    },
//})

export default class GetProfessorController {
  static async handle(request, response) {
    const { id } = request.params;

    try {
      const professor = await professoresModel.findByPk(id, {
        include: [
          {
            model: turmasModel,
            as: 'turmas',
          },
        ],
      });

      if (!professor) {
        return response.status(404).json({ message: "Professor not found" });
      }

      return response.status(200).json(professor);
    } catch (error) {
      console.error("Error retrieving professor:", error);
      return response.status(500).json({ message: "Internal server error" });
    }
  }
}