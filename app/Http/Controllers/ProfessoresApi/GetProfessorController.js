import professoresModel from '../../../Models/professoresModel.js';

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

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;

  const id = request.params.id;

  try {
    const row = await professoresModel.findByPk(id);

    if (row === null) {
      return response.status(HTTP_STATUS.NOT_FOUND).json({
        error: "Professor não encontrado",
      });
    }

    return response.status(HTTP_STATUS.SUCCESS).json(row);

  } catch (error) {
    console.error("Erro ao buscar professor:", error);
    return response.status(HTTP_STATUS.SERVER_ERROR).json({
      error: "Erro interno do servidor",
    });
  }
};