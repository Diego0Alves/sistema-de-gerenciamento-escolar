import turmasModel from "../../../Models/turmasModel.js";
import alunosModel from "../../../Models/alunosModel.js";
import professoresModel from "../../../Models/professoresModel.js";

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
        const data = await turmasModel.findAll({
            limit: limit + 1,
            offset: offset,
            order: [["id", "asc"]],
            include: [
                {
                    model: alunosModel,
                    as: "alunos",
                    attributes: ["id", "nome"],
                }
                , {
                  model: professoresModel,
                  as: "professores",
                  attributes: ["id", "nome", "disciplina"],
                }
            ],
    });

    const hasMore = (data.length > limit);

    const rows = (hasMore) ? (data.slice(0, limit)) : (data);
    const next = (hasMore) ? (offset + limit) : (null);

    return response.status(HTTP_STATUS.SUCCESS).json({
        rows: rows,
        limit: limit,
        next: next
    });
    } catch (error) {
        console.log(error);
        return response.status(HTTP_STATUS.SERVER_ERROR).json({
            error: "Erro ao listar turmas",
        });
    }
};   