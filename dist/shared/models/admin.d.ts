import { Report } from './report';
import { User } from './User';
export declare class Admin extends User {
    constructor(id: number, name: string, email: string, password: string, description: string, address: any, createdAt?: Date);
    rejectReport(report: Report): void;
    approveReport(report: Report): void;
    reviewReport(report: Report): void;
}
