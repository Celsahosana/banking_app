import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllUsers(): Promise<{
        id: string;
        email: string;
        name: string | null;
        createdAt: Date;
        isActive: boolean;
        password: string;
    }[]>;
}
