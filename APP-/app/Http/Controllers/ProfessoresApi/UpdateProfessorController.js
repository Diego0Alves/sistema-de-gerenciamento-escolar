import professoresModel from '../../../Models/professoresModel.js';

//@openapi({
//    tags : ["Professores"],
//    summary : "Update an existing Professor",
//    description : "Update a professor's details by their ID.",
//    parameters : [
//        {
//            name : "id",
//            in : "path",
//            required : true,
//            description : "ID of the professor to update",
//            schema : {
//                type : "string",
//            },
//        },
//    ],
//    requestBody : {
//        required : true,
//        content : {
//            "application/json" : {
//                schema : {
//                    $ref : "#/components/schemas/Professor",
//                },
//            },
//        },
//    },
//    responses : {
//        200 : {
//            description : "Professor updated successfully",
//        },
//        404 : {
//            description : "Professor not found",
//        },
//    },
//})

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;

  const id = request.params.id;

  const requestBody = request.body;
  const nome = requestBody.nome;
  const disciplina = requestBody.disciplina;
  const turma_id = requestBody.turma_id;

  const data = {};

  if (nome !== undefined) data.nome = nome;
  if (disciplina !== undefined) data.disciplina = disciplina;
  if (turma_id !== undefined) data.turma_id = turma_id;

  if (Object.keys(data).length === 0) {
    return response.status(HTTP_STATUS.BAD_REQUEST).json({
      error: "Nenhum campo para atualizar",
    });
  }

  try {
    const [rowsAffected] = await professoresModel.update(
      data,
      {
        where: {
          id: id
        },
        returning: true
      }
    );
    if (rowsAffected === 0) {
      return response.status(HTTP_STATUS.NOT_FOUND).json({
        error: "Professor não encontrado",
      });
    }

    return response.status(HTTP_STATUS.SUCCESS).json(row);
  } catch (error) {
    return response.status(HTTP_STATUS.SERVER_ERROR).json({
      error: "Erro interno do servidor",
    });
  }
};