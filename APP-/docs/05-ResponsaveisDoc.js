export default {
  "/api/responsaveis": {
    get: {
      tags: ["Responsaveis"],
      summary: "Listar responsáveis",
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: "Lista de responsáveis" }
      }
    },
    post: {
      tags: ["Responsaveis"],
      summary: "Criar responsável",
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["nome", "data_nascimento", "email", "telefone", "aluno_id"],
              properties: {
                nome: { type: "string" },
                data_nascimento: { type: "string", format: "date" },
                email: { type: "string", format: "email" },
                telefone: { type: "string" },
                aluno_id: { type: "integer" }
              }
            }
          }
        }
      },
      responses: {
        201: { description: "Responsável criado" },
        400: { description: "Requisição inválida" }
      }
    }
  },
  "/api/responsaveis/{id}": {
    get: {
      tags: ["Responsaveis"],
      summary: "Buscar responsável por ID",
      security: [{ bearerAuth: [] }],
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } }
      ],
      responses: {
        200: { description: "Responsável encontrado" },
        404: { description: "Responsável não encontrado" }
      }
    },
    put: {
      tags: ["Responsaveis"],
      summary: "Atualizar responsável",
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
                telefone: { type: "string" },
                email: { type: "string", format: "email" }
              }
            }
          }
        }
      },
      responses: {
        200: { description: "Responsável atualizado" },
        404: { description: "Responsável não encontrado" }
      }
    },
    delete: {
      tags: ["Responsaveis"],
      summary: "Deletar responsável",
      security: [{ bearerAuth: [] }],
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } }
      ],
      responses: {
        204: { description: "Responsável deletado" },
        404: { description: "Responsável não encontrado" }
      }
    }
  }
};