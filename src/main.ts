import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      exceptionFactory(errors) {
        console.log(errors);
        throw new BadRequestException('Tesssssssssssssssss');
      }
    })
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
