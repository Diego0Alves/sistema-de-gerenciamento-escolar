-- Inserts para responsaveis
INSERT INTO responsaveis (nome, email, telefone) VALUES
('Maria Silva', 'maria.silva@email.com', '11999999999'),
('João Souza', 'joao.souza@email.com', '11888888888');

-- Inserts para turmas
INSERT INTO turmas (nome, ano, periodo) VALUES
('Turma A', 2024, 'Manhã'),
('Turma B', 2024, 'Tarde');

-- Inserts para alunos
INSERT INTO alunos (nome, data_nascimento, responsavel_id, turma_id) VALUES
('Ana Clara', '2012-05-10', 1, 1),
('Pedro Henrique', '2011-09-22', 2, 2);

-- Inserts para professores
INSERT INTO professores (nome, data_nascimento, disciplina, email, senha, turma_id) VALUES
('Carlos Lima', '1980-03-15', 'Matemática', 'carlos.lima@email.com', 'senha123', 1),
('Fernanda Alves', '1975-07-30', 'Português', 'fernanda.alves@email.com', 'senha456', 2);

-- INSERT INTO users (nome, id_role, email, senha, foto)
-- VALUES
-- ('Administrador', 1, 'teste1@mail.com', '123456', NULL),
-- ('Usuário Comum', 2, 'teste2@mail.com', '123456', NULL);