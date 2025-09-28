import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';

import { GoogleController } from './controllers/google.controller';
import { DatabaseModule } from 'src/database/database.module';
import { BcryptService } from 'src/auth/services/bcrypt.service';
import { ArgonService } from './services/argon.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from 'src/config/env.config';
import { ConfigModule, ConfigType } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    // JwtModule.register({
    //   secret: process.env.JWT_SECRET,
    //   signOptions: { expiresIn: '1d' }
    // })
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [jwtConfig.KEY],
      useFactory: (jwtConfigService: ConfigType<typeof jwtConfig>) => ({
        secret: jwtConfigService.JWT_SECRET,
        signOptions: { expiresIn: jwtConfigService.JWT_EXPIRES_IN }
      })
    })
  ],
  controllers: [AuthController, GoogleController],
  providers: [
    AuthService,
    { provide: 'HashService', useClass: BcryptService },
    { provide: 'CONST', useValue: 200 }
  ]
})
export class AuthModule {}
