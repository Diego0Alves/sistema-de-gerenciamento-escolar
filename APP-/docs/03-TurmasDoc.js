export default {
  "/api/turmas": {
    get: {
      tags: ["Turmas"],
      summary: "Listar turmas",
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: "Lista de turmas" }
      }
    },
    post: {
      tags: ["Turmas"],
      summary: "Criar turma",
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["nome"],
              properties: {
                nome: { type: "string" }
              }
            }
          }
        }
      },
      responses: {
        201: { description: "Turma criada" },
        400: { description: "Requisição inválida" }
      }
    }
  },
  "/api/turmas/{id}": {
    get: {
      tags: ["Turmas"],
      summary: "Buscar turma por ID",
      security: [{ bearerAuth: [] }],
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } }
      ],
      responses: {
        200: { description: "Turma encontrada" },
        404: { description: "Turma não encontrada" }
      }
    },
    put: {
      tags: ["Turmas"],
      summary: "Atualizar turma",
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
                nome: { type: "string" }
              }
            }
          }
        }
      },
      responses: {
        200: { description: "Turma atualizada" },
        404: { description: "Turma não encontrada" }
      }
    },
    delete: {
      tags: ["Turmas"],
      summary: "Deletar turma",
      security: [{ bearerAuth: [] }],
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } }
      ],
      responses: {
        204: { description: "Turma deletada" },
        404: { description: "Turma não encontrada" }
      }
    }
  }
};