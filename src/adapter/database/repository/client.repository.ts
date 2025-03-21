import { IClient } from '@/domain/entity/client';
import { ClientSchema } from '../schema/client.schema';
import { RepositoryBase } from './repository-base';
import { IClientRepository } from '@/domain/repository';

export class ClientRepository extends RepositoryBase<ClientSchema> implements IClientRepository {
  async create(data: IClient): Promise<IClient> {
    const model = await this.model.create(data);

    return model.toObject();
  }

  findById(_id: string): Promise<IClient> {
    return this.model.findOne({ _id }).lean();
  }
}
