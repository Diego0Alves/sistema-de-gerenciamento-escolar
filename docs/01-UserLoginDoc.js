export default {
  "/login": {
    post: {
      tags: ["Auth"],
      summary: "Login do usuário",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["email", "senha"],
              properties: {
                email: { type: "string", format: "email" },
                senha: { type: "string" }
              }
            }
          }
        }
      },
      responses: {
        200: { description: "Login realizado com sucesso" },
        401: { description: "Usuário ou senha inválidos" }
      }
    }
  }
};