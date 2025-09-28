import { Injectable } from '@nestjs/common';
import { HashService } from 'src/auth/interfaces/hash-service.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService implements HashService {
  private readonly salt = 10;

  hash(plainText: string): Promise<string> {
    return bcrypt.hash(plainText, this.salt);
  }

  compare(plainText: string, hashedValue: string): Promise<boolean> {
    return bcrypt.compare(plainText, hashedValue);
  }
}
