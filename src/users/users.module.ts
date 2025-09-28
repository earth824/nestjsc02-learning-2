import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from 'src/auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [UsersController],
  providers: [UsersService, { provide: 'ABC', useClass: UsersService }],
  exports: [UsersService]
})
export class UsersModule {}

// @Module({
//   imports: []
// })
// export class DynamicModule {
//   static forRoot(options: any) {
//     return {
//       imports: [options.module]
//     };
//   }
// }

// imports: [AuthModule, DatabaseModule]
