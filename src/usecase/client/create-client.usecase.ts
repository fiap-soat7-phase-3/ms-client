import { IClientRepository } from '../../domain/repository/client.repository';
import { IUseCase } from '../usecase.interface';
import { IClient } from '../../domain/entity/client';

export class CreateClientUseCase implements IUseCase<IClient> {
  constructor(
    private readonly clientRepository: IClientRepository,
  ) {}

  async execute(clientDTO: IClient): Promise<IClient> {

    const client = await this.clientRepository.create(clientDTO);

    return client;
  }
}
