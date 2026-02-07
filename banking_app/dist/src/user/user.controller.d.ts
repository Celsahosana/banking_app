import { UsersService } from './user.service.js';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<{
        id: string;
        email: string;
        name: string | null;
        createdAt: Date;
        isActive: boolean;
        password: string;
    }[]>;
}
