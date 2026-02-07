import { Module } from '@nestjs/common';
import { UsersService } from './user.service.js';
import { UsersController } from './user.controller.js';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
