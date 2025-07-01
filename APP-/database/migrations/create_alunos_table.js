import db from "../../config/db";

async function up() {
    await db.query(`
CREATE TABLE IF NOT EXISTS alunos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data_nascimento DATE NOT NULL,
    responsavel_id INTEGER NOT NULL,
    turma_id INTEGER NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_alunos_responsavel
        FOREIGN KEY (responsavel_id)
        REFERENCES responsaveis(id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,
    CONSTRAINT fk_alunos_turma
        FOREIGN KEY (turma_id)
        REFERENCES turmas(id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);
`);
}

async function down() {
    await db.query(`
DROP TABLE IF EXISTS alunos;
`);
}

export default {
    up,
    down
};