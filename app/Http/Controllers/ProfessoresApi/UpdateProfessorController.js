import professoresModel from '../../Models/ProfessoresModel.js';
import turmasModel from '../../Models/TurmasModel.js';

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

export default class UpdateProfessorController {
    static async handle(request, response) {
        const { id } = request.params;
        const { nome, email, telefone } = request.body;

        try {
            const professor = await professoresModel.findByPk(id);

            if (!professor) {
                return response.status(404).json({ message: "Professor not found" });
            }

            // Update professor details
            await professoresModel.update(
                { nome, email, telefone },
                { where: { id } }
            );

            return response.status(200).json({ message: "Professor updated successfully" });
        } catch (error) {
            console.error("Error updating professor:", error);
            return response.status(500).json({ message: "Internal server error" });
        }
    }
}