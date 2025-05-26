interface User {
    register(): void;
    getRole(): string;
  }
  
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
  
  export abstract class UserFactory {
    abstract createUser(
      name: string,
      email: string,
      password: string,
      extraInfo?: string
    ): User;
  
    registerUser(name: string, email: string, password: string, extraInfo?: string): void {
      const user = this.createUser(name, email, password, extraInfo);
      if (this.isValidEmail(email) && this.isValidPassword(password)) {
        user.register();
      } else {
        throw new Error("E-mail inválido ou senha fraca.");
      }
    }
  
    private isValidEmail(email: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    private isValidPassword(password: string): boolean {
      return password.length >= 6;
    }
  }
  
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