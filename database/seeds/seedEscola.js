// ./seeds/seedEscola.js
import responsaveisModel from '../../app/Models/responsaveisModel.js';
import alunosModel from '../../app/Models/alunosModel.js';
import professoresModel from '../../app/Models/professoresModel.js';
import turmaModel from '../../app/Models/turmasModel.js';

export async function up() {
  try {
    const turmas = await turmaModel.bulkCreate([
      { nome: 'Turma A', ano: 2025, periodo: 'Manhã' },
      { nome: 'Turma B', ano: 2025, periodo: 'Tarde' }
    ]);

    const responsaveis = await responsaveisModel.bulkCreate([
      { nome: 'Carlos Silva', email: 'carlos@email.com', telefone: '11988887777' },
      { nome: 'Fernanda Souza', email: 'fernanda@email.com', telefone: '11977776666' }
    ]);

    await professoresModel.bulkCreate([
      {
        nome: 'Ana Oliveira',
        data_nascimento: '1980-06-15',
        disciplina: 'Matemática',
        email: 'ana.oliveira@escola.com',
        senha: 'senha123',
        turma_id: turmas[0].id
      },
      {
        nome: 'Pedro Lima',
        data_nascimento: '1975-09-22',
        disciplina: 'História',
        email: 'pedro.lima@escola.com',
        senha: 'senha456',
        turma_id: turmas[1].id
      }
    ]);

    await alunosModel.bulkCreate([
      {
        nome: 'João da Silva',
        data_nascimento: '2010-05-10',
        responsavel_id: responsaveis[0].id,
        turma_id: turmas[0].id
      },
      {
        nome: 'Maria Souza',
        data_nascimento: '2011-08-25',
        responsavel_id: responsaveis[1].id,
        turma_id: turmas[1].id
      }
    ]);

    console.log('✅ Seed UP concluído com sucesso!');
  } catch (error) {
    console.error('❌ Erro no seed UP:', error);
  }
}

export async function down() {
  try {
    await alunosModel.destroy({ where: {}, truncate: true, cascade: true });
    await professoresModel.destroy({ where: {}, truncate: true, cascade: true });
    await responsaveisModel.destroy({ where: {}, truncate: true, cascade: true });
    await turmaModel.destroy({ where: {}, truncate: true, cascade: true });

    console.log('✅ Seed DOWN executado (dados removidos).');
  } catch (error) {
    console.error('❌ Erro no seed DOWN:', error);
  }
}
