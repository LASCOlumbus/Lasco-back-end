import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsObject } from 'class-validator';

export class CreatePdfDto {
  @ApiProperty({
    example: 'invoice',
    description: 'PDF template type',
  })
  @IsString()
  type: string;

  @ApiProperty({
    example: { name: 'John', amount: 100 },
  })
  @IsObject()
  data: Record<string, any>;

  @ApiProperty({
    required: false,
    example: 'extra metadata',
  })
  @IsOptional()
  @IsString()
  meta?: string;
}
