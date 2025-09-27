import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  register() {
    // find exist email
    // hash a password
    // insert into database
    // send verification email
  }
}
