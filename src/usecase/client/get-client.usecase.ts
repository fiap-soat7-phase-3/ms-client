import { IClient } from '@/domain/entity/client';
import { IUseCase } from '../usecase.interface';
import { IClientRepository } from '@/domain/repository/client.repository';

export class GetClientUseCase implements IUseCase<IClient> {
  constructor(private readonly clientRepository: IClientRepository) {}

  async execute(id: string): Promise<IClient> {
    const client = await this.clientRepository.findById(id)

    if (!client) {
        throw new Error("Client not found");
    }

    return client;
  }
}