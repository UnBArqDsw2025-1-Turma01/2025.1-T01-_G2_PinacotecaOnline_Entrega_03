export class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    private password: string,
    public description: string,
    public address: any,
    public type: 'admin' | 'artist' | 'common' = 'common',
    public createdAt: Date = new Date(),
    public comments: Comment[] = [],
  ) {}

  validatePassword(input: string): boolean {
    return this.password === input;
  }
}
