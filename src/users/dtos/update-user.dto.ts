import { OmitType, PartialType } from '@nestjs/swagger';
// import { Transform, Type } from 'class-transformer';
// import {
//   ArrayNotEmpty,
//   IsArray,
//   IsBoolean,
//   IsDate,
//   IsEmail,
//   IsInt,
//   IsNotEmpty,
//   IsOptional,
//   IsString,
//   IsUrl,
//   ValidateNested
// } from 'class-validator';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';

export class UpdateUserDto extends PartialType(
  OmitType(CreateUserDto, ['email'] as const)
) {}

// class Address {
//   @IsString()
//   @IsNotEmpty()
//   @Transform(({ value }) => {
//     if (typeof value === 'string') value.trim();
//     return value as unknown;
//   })
//   city: string;

//   @IsString()
//   @IsNotEmpty()
//   province: string;
// }

// export class UpdateUserDto {
//   @IsOptional()
//   @IsString({ message: 'Must be string' })
//   @IsNotEmpty()
//   name: string;

//   @IsOptional()
//   @IsEmail({}, { message: 'invalid address' })
//   email: string;

//   @IsOptional()
//   @Type(() => Date)
//   @IsDate()
//   dob: Date;

//   @IsOptional()
//   @IsInt()
//   point: number;

//   @IsOptional()
//   @IsBoolean()
//   status: boolean;

//   @IsUrl()
//   @IsOptional()
//   image?: string;

//   @IsOptional()
//   @IsArray()
//   @ArrayNotEmpty()
//   // @ValidateNested({ each: true })
//   @IsString({ each: true })
//   hashtag: string[];

//   @IsOptional()
//   @ValidateNested()
//   @Type(() => Address)
//   address: Address;
// }
