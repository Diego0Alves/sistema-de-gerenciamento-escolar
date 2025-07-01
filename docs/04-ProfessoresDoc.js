export default {
  "/api/professores": {
    get: {
      tags: ["Professores"],
      summary: "Listar professores",
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: "Lista de professores" }
      }
    },
    post: {
      tags: ["Professores"],
      summary: "Criar professor",
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["nome", "data_nascimento", "email", "disciplina", "senha", "turma_id"],
              properties: {
                nome: { type: "string" },
                data_nascimento: { type: "string", format: "date" },
                email: { type: "string", format: "email" },
                disciplina: { type: "string" },
                senha: { type: "string" },
                turma_id: { type: "integer" }
              }
            }
          }
        }
      },
      responses: {
        201: { description: "Professor criado" },
        400: { description: "Requisição inválida" }
      }
    }
  },
  "/api/professores/{id}": {
    get: {
      tags: ["Professores"],
      summary: "Buscar professor por ID",
      security: [{ bearerAuth: [] }],
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } }
      ],
      responses: {
        200: { description: "Professor encontrado" },
        404: { description: "Professor não encontrado" }
      }
    },
    put: {
      tags: ["Professores"],
      summary: "Atualizar professor",
      security: [{ bearerAuth: [] }],
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                nome: { type: "string" },
                disciplina: { type: "string" },
                turma_id: { type: "integer" }
              }
            }
          }
        }
      },
      responses: {
        200: { description: "Professor atualizado" },
        404: { description: "Professor não encontrado" }
      }
    },
    delete: {
      tags: ["Professores"],
      summary: "Deletar professor",
      security: [{ bearerAuth: [] }],
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } }
      ],
      responses: {
        204: { description: "Professor deletado" },
        404: { description: "Professor não encontrado" }
      }
    }
  }
};