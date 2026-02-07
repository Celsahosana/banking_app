import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './user.service.js';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

//   @Post()
//   createUser(
//     @Body('id') id: string,
//     @Body('email') email: string,
//     @Body('password') password: string,
//     @Body('name') name?: string,
//   ) {
//     return this.usersService.createUser({
//       id,
//       email,
//       password,
//       name,
//     });
//   }

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

//   @Get(':id')
//   getUser(@Param('id') id: string) {
//     return this.usersService.getUserById(id);
//   }

//   @Patch(':id/deactivate')
//   deactivate(@Param('id') id: string) {
//     return this.usersService.deactivateUser(id);
//   }
}
