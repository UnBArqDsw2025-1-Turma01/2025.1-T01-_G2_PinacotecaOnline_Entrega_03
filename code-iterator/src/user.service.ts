import { Injectable, Inject } from '@nestjs/common';

// Interface do Implementador para armazenamento de usuários
export interface UserStorageImplementor {
  saveUser(user: User): boolean;
}

// Interface para o Iterator de Usuários
export interface UserIterator {
  next(): User | null;
  hasNext(): boolean;
}

// Interface para a coleção de usuários
export interface UserCollection {
  getIterator(): UserIterator;
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

// Implementação do Iterator Concreto para Usuários (não injetável)
export class UserGalleryIterator implements UserIterator {
  private index: number = 0;

  constructor(private users: User[]) {}

  next(): User | null {
    if (this.hasNext()) {
      return this.users[this.index++];
    }
    return null;
  }

  hasNext(): boolean {
    return this.index < this.users.length;
  }
}

// Implementação da Coleção de Usuários
@Injectable()
export class UserGallery implements UserCollection {
  private users: User[] = [];

  constructor(
    @Inject('UserStorageImplementor')
    private readonly implementor: UserStorageImplementor,
  ) {}

  addUser(user: User): boolean {
    if (!this.validateEmail(user.email) || !this.validatePassword(user.password)) {
      console.error('Erro: E-mail inválido ou senha fraca.');
      return false;
    }

    const success = this.implementor.saveUser(user);
    if (success) {
      this.users.push(user);
      if (user.role === 'artist') {
        console.log(`Artista registrado: ${user.name} com descrição: ${user.description || 'Sem descrição'}`);
      } else {
        console.log(`Administrador registrado: ${user.name} (${user.email})`);
      }
    }
    return success;
  }

  getIterator(): UserIterator {
    return new UserGalleryIterator(this.users);
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

// Serviço de Usuários
@Injectable()
export class UserService {
  constructor(
    @Inject('UserStorageImplementor')
    private readonly implementor: UserStorageImplementor,
  ) {}

  // Cria uma galeria para gerenciar os usuários
  createUserGallery(): UserGallery {
    return new UserGallery(this.implementor);
  }
}