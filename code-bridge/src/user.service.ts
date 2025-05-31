import { Injectable, Inject } from '@nestjs/common';

// Interface do Implementador para armazenamento de usuários
export interface UserStorageImplementor {
  saveUser(user: User): boolean;
}

// Implementador Concreto: Simula armazenamento local para usuários
@Injectable()
export class LocalUserStorage implements UserStorageImplementor {
  saveUser(user: User): boolean {
    try {
      console.log(`Usuário salvo: ${user.name} (${user.email})`);
      return true;
    } catch (error) {
      console.error('Erro ao salvar usuário no servidor.');
      return false;
    }
  }
}

// Entidade de Usuário
export interface User {
  name: string;
  email: string;
  password: string;
  description?: string;
  role: 'artist' | 'admin';
}

// Serviço de Usuários
@Injectable()
export class UserService {
  constructor(
    @Inject('UserStorageImplementor')
    private readonly implementor: UserStorageImplementor,
  ) {}

  // Registra um usuário (artista ou administrador)
  registerUser(user: User): boolean {
    if (!this.validateEmail(user.email) || !this.validatePassword(user.password)) {
      console.error('Erro: E-mail inválido ou senha fraca.');
      return false;
    }

    const success = this.implementor.saveUser(user);
    if (success) {
      if (user.role === 'artist') {
        console.log(`Artista registrado: ${user.name} com descrição: ${user.description || 'Sem descrição'}`);
      } else {
        console.log(`Administrador registrado: ${user.name} (${user.email})`);
      }
    }
    return success;
  }

  // Valida o formato do e-mail
  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Verifica se a senha tem pelo menos 8 caracteres
  private validatePassword(password: string): boolean {
    return password.length >= 8;
  }
}