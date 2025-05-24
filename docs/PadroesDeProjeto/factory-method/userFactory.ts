// Interface do Produto (Usuário)
interface User {
    register(): void;
    getRole(): string;
  }
  
  // Produtos Concretos (Usuários)
  class CommonUser implements User {
    constructor(
      private name: string,
      private email: string,
      private password: string
    ) {}
  
    register(): void {
      console.log(`Usuário comum registrado: ${this.name} (${this.email})`);
    }
  
    getRole(): string {
      return "CommonUser";
    }
  }
  
  class Artist implements User {
    constructor(
      private name: string,
      private email: string,
      private password: string,
      private description?: string
    ) {}
  
    register(): void {
      console.log(
        `Artista registrado: ${this.name} com descrição: ${this.description || "N/A"}`
      );
    }
  
    getRole(): string {
      return "Artist";
    }
  }
  
  class Admin implements User {
    constructor(
      private name: string,
      private email: string,
      private password: string
    ) {}
  
    register(): void {
      console.log(`Administrador registrado: ${this.name} (${this.email})`);
    }
  
    getRole(): string {
      return "Admin";
    }
  }
  
  // Interface Creator (Usuário)
  export abstract class UserFactory {
    abstract createUser(
      name: string,
      email: string,
      password: string,
      extraInfo?: string
    ): User;
  
    registerUser(name: string, email: string, password: string, extraInfo?: string): void {
      const user = this.createUser(name, email, password, extraInfo);
      // Validação comum (ex.: verificar se o e-mail é válido)
      if (this.isValidEmail(email) && this.isValidPassword(password)) {
        user.register();
      } else {
        throw new Error("E-mail inválido ou senha fraca.");
      }
    }
  
    private isValidEmail(email: string): boolean {
      // Simulação de validação de e-mail
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    private isValidPassword(password: string): boolean {
      // Exemplo: senha deve ter pelo menos 6 caracteres
      return password.length >= 6;
    }
  }
  
  // Concrete Creators (Usuário)
  export class CommonUserFactory extends UserFactory {
    createUser(name: string, email: string, password: string): User {
      return new CommonUser(name, email, password);
    }
  }
  
  export class ArtistFactory extends UserFactory {
    createUser(name: string, email: string, password: string, extraInfo?: string): User {
      return new Artist(name, email, password, extraInfo);
    }
  }
  
  export class AdminFactory extends UserFactory {
    createUser(name: string, email: string, password: string): User {
      return new Admin(name, email, password);
    }
  }