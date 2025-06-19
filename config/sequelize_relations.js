import alunosModel from '../app/Models/alunosModel.js';
import responsaveisModel from '../app/Models/responsaveisModel.js';
import turmasModel from '../app/Models/turmasModel.js';
import professoresModel from '../app/Models/professoresModel.js';

// Aluno pertence a Responsável
alunosModel.belongsTo(responsaveisModel, {
    foreignKey: {
        name: 'responsavel_id',
        allowNull: false
    },
    as: 'responsavel'
});
responsaveisModel.hasMany(alunosModel, {
    foreignKey: 'responsavel_id',
    as: 'alunos'
});

// Aluno pertence a Turma
alunosModel.belongsTo(turmasModel, {
    foreignKey: {
        name: 'turma_id',
        allowNull: false
    },
    as: 'turma'
});
turmasModel.hasMany(alunosModel, {
    foreignKey: 'turma_id',
    as: 'alunos'
});

// Professor pertence a Turma
professoresModel.belongsTo(turmasModel, {
    foreignKey: {
        name: 'turma_id',
        allowNull: false
    },
    as: 'turma'
});
turmasModel.hasMany(professoresModel, {
    foreignKey: 'turma_id',
    as: 'professores'
});