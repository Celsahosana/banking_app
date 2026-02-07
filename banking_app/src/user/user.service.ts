import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  // async createUser(data: {
  //   id: string;
  //   email: string;
  //   password: string;
  //   name?: string;
  // }) {
  //   return this.prisma.user.create({
  //   });
  // }

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  // async getUserById(id: string) {
  //   return this.prisma.user.findUnique({
  //     where: { id },
  //   });
  // }

  // async deactivateUser(id: string) {
  //   return this.prisma.user.update({
  //     where: { id },
  //     data: { isActive: false },
  //   });
  // }
}
