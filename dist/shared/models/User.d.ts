export declare class User {
    id: number;
    name: string;
    email: string;
    private password;
    description: string;
    address: any;
    type: 'admin' | 'artist' | 'common';
    createdAt: Date;
    comments: Comment[];
    constructor(id: number, name: string, email: string, password: string, description: string, address: any, type?: 'admin' | 'artist' | 'common', createdAt?: Date, comments?: Comment[]);
    validatePassword(input: string): boolean;
}
