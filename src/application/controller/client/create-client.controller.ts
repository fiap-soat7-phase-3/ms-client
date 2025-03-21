import { IController } from '../controller.interface';
import { CreateClientUseCase } from '@/usecase/client/create-client.usecase';
import { ClientCreateDTO } from '@/application/presenter/client/dto/client-create.dto';
import { IClientRepository } from '@/domain/repository';
import { ClientPresenter } from '@/application/presenter/client/client.presenter';
import { ClientDTO } from '@/application/presenter/client/dto/client.dto';

export class CreateClientController implements IController<ClientDTO> {
  useCase: CreateClientUseCase;

  constructor(
    vehicleRepository: IClientRepository,
  ) {
    this.useCase = new CreateClientUseCase(vehicleRepository);
  }

  async handle(data: ClientCreateDTO): Promise<ClientDTO> {
    let vehicle = await this.useCase.execute(data);

    return ClientPresenter.toDTO(vehicle);
  }
}
