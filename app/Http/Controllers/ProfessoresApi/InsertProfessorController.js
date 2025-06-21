import professoresModel from '../../Models/ProfessoresModel.js';
import turmasModel from '../../Models/TurmasModel.js';

//@openapi({
//    tags : ["Professores"],
//    summary : "Insert a new Professor",
//    description : "Create a new professor.",
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
//        201 : {
//            description : "Professor created successfully",
//        },
//        400 : {
//            description : "Invalid request",
//        },
//    },
//})

export default class InsertProfessorController {
    static async handle(request, response) {
        const { nome, email, telefone } = request.body;

        try {
            // Validate input
            if (!nome || !email || !telefone) {
                return response.status(400).json({ message: "Invalid request" });
            }

            // Create new professor
            const newProfessor = await professoresModel.create({
                nome,
                email,
                telefone,
            });

            return response.status(201).json(newProfessor);
        } catch (error) {
            console.error("Error inserting professor:", error);
            return response.status(500).json({ message: "Internal server error" });
        }
    }
}