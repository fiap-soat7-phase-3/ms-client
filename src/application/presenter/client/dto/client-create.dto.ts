import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';

export class ClientCreateDTO {
  @ApiProperty({
    example: "Roberto Augusto",
  })
  @IsNotEmpty()
  @Expose()
  name: string;

  @ApiProperty({
    example: "123456983",
  })
  @IsNotEmpty()
  @Expose()
  document: string;
}
