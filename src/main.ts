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
        // [{ field: "name", messages: ["must be string", "must not empty"]   }]
        console.log(errors);
        const result = errors.map((el) => ({
          field: el.property,
          messages: Object.values(el.constraints ?? {})
        }));
        throw new BadRequestException(result);
      }
    })
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
