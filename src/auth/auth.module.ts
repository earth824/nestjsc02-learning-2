import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { HashService } from './services/hash.service';
import { GoogleController } from './controllers/google.controller';

@Module({
  imports: [UsersModule],
  controllers: [AuthController, GoogleController],
  providers: [AuthService, HashService]
})
export class AuthModule {}
