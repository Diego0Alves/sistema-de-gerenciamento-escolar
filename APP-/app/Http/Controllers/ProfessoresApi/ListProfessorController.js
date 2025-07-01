import professoresModel from '../../../Models/professoresModel.js';
import turmasModel from '../../../Models/turmasModel.js';

//@openapi({
//    tags : ["Professores"],
//    summary : "List all Professors",
//    description : "Retrieve a list of all professors.",
//    responses : {
//        200 : {
//            description : "List of professors retrieved successfully",
//            content : {
//                "application/json" : {
//                    schema : {
//                        type : "array",
//                        items : {
//                            $ref : "#/components/schemas/Professor",
//                        },
//                    },
//                },
//            },
//        },
//    },
//})

export default async (request, response) => {
    const HTTP_STATUS = CONSTANTS.HTTP;

    const limit = request.query.limit || 100;
    const offset = request.query.offset || 0;
    const orderBy = request.query.orderBy || "id,asc";

    if (limit > CONSTANTS.MAX_GET_LIMIT) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({
            error: `O limite máximo de registros é ${CONSTANTS.MAX_GET_LIMIT}`,
        });
    }

    try {
        const data = await professoresModel.findAll({
            limit: limit + 1,
            offset: offset,
            order: [["id", "asc"]],
            include: [
                {
                    model: turmasModel,
                    as: "turma",
                    attributes: ["id", "nome"],
                },
            ],
    });

    const hasMore = (data.length > limit);

    const rows = (hasMore) ? (data.slice(0, limit)) : (data);
    const next = (hasMore) ? (offset + limit) : (null);

    return response.status(HTTP_STATUS.OK).json({
        rows: rows,
        limit: limit,
        next: next
    });
    } catch (error) {
        console.log(error);
        return response.status(HTTP_STATUS.SERVER_ERROR).json({
            error: "Erro ao listar professores",
        });
    }
};