import { OnModuleInit } from '@nestjs/common';
export declare class TestService implements OnModuleInit {
    onModuleInit(): void;
    testFactory(factoryName: string, factory: any): void;
}
