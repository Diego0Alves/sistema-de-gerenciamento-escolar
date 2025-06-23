import professoresModel from '../../Models/ProfessoresModel.js';

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

export default class ListProfessorController {
    static async handle(request, response) {
        try {
            const professores = await professoresModel.findAll();
            return response.status(200).json(professores);
        } catch (error) {
            console.error("Error listing professors:", error);
            return response.status(500).json({ message: "Internal server error" });
        }
    }
}