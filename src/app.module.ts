import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

import { validate } from 'src/config/env.validation';
import { envConfig, googleConfig, jwtConfig } from 'src/config/env.config';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
      load: [envConfig, jwtConfig, googleConfig]
      // validationSchema: joi,
    }) // convention: forRoot, register
    // DynamicModule.forRoot()
  ]
})
export class AppModule {}
