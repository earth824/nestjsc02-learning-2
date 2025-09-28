import {
  ConflictException,
  HttpCode,
  HttpStatus,
  Inject,
  Injectable
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from 'src/auth/dtos/register.dto';
import { type HashService } from 'src/auth/interfaces/hash-service.interface';
import { PrismaService } from 'src/database/prisma.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    @Inject('HashService') private readonly hashService: HashService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService
  ) {}

  async register(registerDto: RegisterDto) {
    // find exist email
    const existingUser = await this.prisma.user.findUnique({
      where: { email: registerDto.email }
    });
    if (existingUser) {
      throw new ConflictException('email already exist');
    }
    // hash a password
    const hashedPassword = await this.hashService.hash(registerDto.password);
    // insert into database
    await this.prisma.user.create({
      data: { email: registerDto.email, password: hashedPassword }
    });
    // send verification email
  }

  @HttpCode(HttpStatus.OK)
  async login() {
    const access = await this.jwtService.signAsync({ id: 500 });
    const refresh = await this.jwtService.signAsync(
      { id: 500 },
      { secret: 'sdsddssddsd', expiresIn: '1y' }
    );
    return { access, refresh };
  }
}
