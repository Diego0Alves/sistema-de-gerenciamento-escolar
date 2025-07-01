export default {
  "/api/alunos": {
    get: {
      tags: ["Alunos"],
      summary: "Listar alunos",
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          description: "Lista de alunos",
        },
      },
    },
    post: {
      tags: ["Alunos"],
      summary: "Criar aluno",
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["nome", "data_nascimento", "responsavel_id", "turma_id"],
              properties: {
                nome: { type: "string" },
                data_nascimento: { type: "string", format: "date" },
                responsavel_id: { type: "integer" },
                turma_id: { type: "integer" }
              }
            }
          }
        }
      },
      responses: {
        201: { description: "Aluno criado" },
        400: { description: "Requisição inválida" }
      }
    }
  },
  "/api/alunos/{id}": {
    get: {
      tags: ["Alunos"],
      summary: "Buscar aluno por ID",
      security: [{ bearerAuth: [] }],
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } }
      ],
      responses: {
        200: { description: "Aluno encontrado" },
        404: { description: "Aluno não encontrado" }
      }
    },
    put: {
      tags: ["Alunos"],
      summary: "Atualizar aluno",
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
                turma_id: { type: "integer" }
              }
            }
          }
        }
      },
      responses: {
        200: { description: "Aluno atualizado" },
        404: { description: "Aluno não encontrado" }
      }
    },
    delete: {
      tags: ["Alunos"],
      summary: "Deletar aluno",
      security: [{ bearerAuth: [] }],
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } }
      ],
      responses: {
        204: { description: "Aluno deletado" },
        404: { description: "Aluno não encontrado" }
      }
    }
  }
};