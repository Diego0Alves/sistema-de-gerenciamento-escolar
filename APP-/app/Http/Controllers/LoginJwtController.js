import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../../Models/userModel.js';
import { request } from 'express';

export default async (request, response) => {

    const email = request.body.email;
    const senha = request.body.senha;

    const JWT_SECRET = process.env.JWT_SECRET;
    const JWT_EXPIRES = '10m';

    try {
        const user = await userModel.findOne({
            where: {
                email: email
            },
            include: [
                "role"
            ]
        });
        if (!user) {
            return response.status(401).json({ message: 'Usuário Invalido' });
        }

        const senhaValida = await bcrypt.compare(senha, user.senha);
        
        if (!senhaValida) {
            return response.status(401).json({ message: 'Senha Invalida' });
        }

        const payload = {
            id: user.id,
            email: user.email,
            nome: user.nome,
            role: user.role.nome
        };

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES });
        
        return response.json({
            token: token,
            expiresin: JWT_EXPIRES,

        });
    } catch (error) {
        console.error('Erro ao autenticar usuário:', error);
        return response.status(500).json({ message: 'Erro interno do servidor' });
    }

}