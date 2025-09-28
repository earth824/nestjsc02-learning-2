import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  ValidationPipe
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UpdateUserDto } from 'src/users/dtos/update-user.dto';
import { UsersService } from 'src/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

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
  async create(
    @Body()
    createUserDto: CreateUserDto
  ) {
    // convert body (plain object) to instance of CreateUSerDto class
    // validate instance of CreateUSerDto
    // return transform === true ? instance : body (plain object)
    await this.usersService.create(createUserDto);
    return 'User created';
  }

  @Patch(':id')
  update(@Body() body: UpdateUserDto) {
    // throw new Error('email exist');
    throw new HttpException(
      {
        code: 'email_exist',
        status: HttpStatus.CONFLICT,
        detail: 'email_exist',
        timestamp: new Date().toISOString(),
        path: ''
      },
      HttpStatus.CONFLICT
    );

    // await prisma.update()

    // throw new ConflictException(true);
  }
}

// [{ field: "name", messages: ["must be string", "must not empty"]   }]
// { status, message, code, details, timestamp, path }
