import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Alice Wonderland', email: 'alice@example.com' },
    { id: 2, name: 'Bob The Builder', email: 'bob@example.com' },
  ];
  private nextId = 3;

  async findUserById(userId: number): Promise<User | null> {
    console.log(`[UserService] Buscando usuário com ID: ${userId} no 'banco de dados'`);
    const user = this.users.find(u => u.id === userId);
    if (!user) {
      console.warn(`[UserService] Usuário com ID: ${userId} não encontrado.`);
      return null;
    }
    console.log(`[UserService] Usuário encontrado: ${user.name}`);
    return user;
  }

  async createUser(dto: CreateUserDto): Promise<User> {
    console.log(`[UserService] Criando usuário: ${dto.name}`);
    const newUser: User = { id: this.nextId++, ...dto };
    this.users.push(newUser);
    return newUser;
  }
  getAllUsers(): Promise<User[]> {
    console.log('[UserService] Retornando todos os usuários.');
    return Promise.resolve(this.users);
  }
}