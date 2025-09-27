import { Transform, Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsDate,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested
} from 'class-validator';

class Address {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => {
    if (typeof value === 'string') value.trim();
    return value as unknown;
  })
  city: string;

  @IsString()
  @IsNotEmpty()
  province: string;
}

export class CreateUserDto {
  @IsString({ message: 'Must be string' })
  @IsNotEmpty()
  name: string;

  @IsEmail({}, { message: 'invalid address' })
  email: string;

  @Type(() => Date)
  @IsDate()
  dob: Date;

  @IsInt()
  point: number;

  @IsBoolean()
  status: boolean;

  @IsUrl()
  @IsOptional()
  image?: string;

  @IsArray()
  @ArrayNotEmpty()
  // @ValidateNested({ each: true })
  @IsString({ each: true })
  hashtag: string[];

  @ValidateNested()
  @Type(() => Address)
  address: Address;
}
