import professoresModel from '../../../Models/professoresModel.js';

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

export default async (request, response) => {
  const HTTP_STATUS = CONSTANTS.HTTP;
  const { nome, data_nascimento, email, disciplina, senha, turma_id } = request.body;

  // Validação simples
  if (!nome || !data_nascimento || !email || !disciplina || !senha || !turma_id) {
    return response.status(HTTP_STATUS.BAD_REQUEST).json({
      error: "Campos obrigatórios: nome, data_nascimento, email, disciplina, senha, turma_id"
    });
  }

  try {
    const novoProfessor = await professoresModel.create({
      nome,
      data_nascimento,
      email,
      disciplina,
      senha,
      turma_id
    });

    return response.status(HTTP_STATUS.CREATED).json(novoProfessor);
  } catch (error) {
    console.error("Erro ao inserir professor:", error);
    return response.status(HTTP_STATUS.SERVER_ERROR).json({
      error: "Erro interno do servidor"
    });
  }
};