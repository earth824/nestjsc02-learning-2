import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';

@Controller('users')
export class UsersController {
  @Get(':id')
  findById(
    @Param(
      'id',
      new ParseIntPipe({
        // errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        // exceptionFactory(error) {
        //   throw new BadRequestException('Invalid id');
        // }
      })
    )
    id: number
  ) {
    return { id };
  }

  // { name, email, dob, status, point, image, hashtag }
  @Post()
  create(
    @Body()
    body: CreateUserDto
  ) {
    // convert body (plain object) to instance of CreateUSerDto class
    // validate instance of CreateUSerDto
    // return transform === true ? instance : body (plain object)
    console.log(body);
    return body;
  }
}

// [{ field: "name", messages: ["must be string", "must not empty"]   }]
