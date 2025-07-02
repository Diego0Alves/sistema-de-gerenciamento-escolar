import professoresModel from '../../../Models/professoresModel.js';

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

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;

  const id = request.params.id;

  try {
    const rowsDeleted = await professoresModel.destroy({
      where: { id },
    });

    if (rowsDeleted === 0) {
      return response.status(HTTP_STATUS.NOT_FOUND).json({
        error: "Professor não encontrado",
      });
    }
    return response.status(HTTP_STATUS.SUCCESS_NO_CONTENT).send();
  } catch (error) {
    console.error("Erro ao deletar professor:", error);
    return response.status(HTTP_STATUS.SERVER_ERROR).json({
      error: "Erro interno do servidor",
    });
  }

};