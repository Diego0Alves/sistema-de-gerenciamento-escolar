import db from '../config/db.js';

async function up() {
    await db.query(`
        CREATE TABLE IF NOT EXISTS responsaveis (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    telefone VARCHAR(20),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);`
    ); 
}

async function down() {
    await db.query(`
        DROP TABLE IF EXISTS responsaveis;
    `);
}

export default {
    up,
    down
};