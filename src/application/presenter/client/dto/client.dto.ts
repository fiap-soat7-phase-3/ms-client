import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { AbstractEntity } from '@/adapter/database/schema/abstract-entity';
import { IClient } from '@/domain/entity/client';

export class ClientDTO extends AbstractEntity implements IClient {
  @ApiProperty({
    example: "e43895da-60de-461c-bb45-c9d74d70f88c",
  })
  @Expose()
  id: string;

  @ApiProperty({
    example: "Guri Arbusto",
  })
  @Expose()
  name: string;

  @ApiProperty({
    example: "12347332921",
  })
  @Expose()
  document: string;

  @ApiProperty({
    example: "2025-03-21",
  })
  @Expose()
  createdAt: Date;
}
