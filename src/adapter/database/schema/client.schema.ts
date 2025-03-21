import { Prop, Schema } from '@nestjs/mongoose';
import { AbstractEntity } from './abstract-entity';
import { IClient } from '@/domain/entity/client';

@Schema()
export class ClientSchema extends AbstractEntity implements IClient {
  @Prop({
    default: () => new Date(),
  })
  createdAt: Date;

  @Prop()
  name: string;

  @Prop()
  document: string;
}
