import alunosModel from "../../../Models/alunosModel";
import responsaveisModel from "../../../Models/responsaveisModel";
import turmasModel from "../../../Models/turmasModel";

export default async (request, response) => {

    const HTTP_STATUS_OK = CONSTANTS.HTTP;

    const limit = parseInt(request.query.limit) || 100;
    const offset = parseInt(request.query.offset) || 0;
    const orderBy = request.query.orderBy || "id,asc";

    if (limit > CONSTANTS.MAX_GET_LIMIT) {
        return response.status(HTTP_STATUS_OK.BAD_REQUEST).json({error: `Limit máximo ${CONSTANTS.MAX_GET_LIMIT}`});
    }

    try {

        const data = await alunosModel.findAll({
            limit: limit + 1,
            offset: offset,
            order: [["id", "ASC"]],
            include: [
                {
                    model: responsaveisModel,
                    as: "responsavel",
                },
                {
                    model: turmasModel,
                    as: "turma"
                }
            ]
        });

        const hasMore = (data.length > limit);

        const rows = (hasMore) ? (data.slice(0, limit)) : (data);
        const next = (hasMore) ? (offset + limit) : (null);

        return response.status(HTTP_STATUS.SUCCESS).json({
            rows: rows,
            limit: limit,
            next: next,
        });

    } catch (error) {
        console.error("Error fetching alunos:", error);
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: "Internal server error" });
    }

};