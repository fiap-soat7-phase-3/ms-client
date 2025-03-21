import { ClientDTO } from "@/application/presenter/client/dto/client.dto";
import { GetClientUseCase } from "@/usecase/client/get-client.usecase";
import { IController } from "../controller.interface";
import { IClientRepository } from "@/domain/repository/client.repository";
import { ClientPresenter } from "@/application/presenter/client/client.presenter";


export class GetClientController implements IController<ClientDTO> {
  useCase: GetClientUseCase;

  constructor(clientRepository: IClientRepository) {
    this.useCase = new GetClientUseCase(clientRepository);
  }

  async handle(id: string): Promise<ClientDTO> {
    const client = await this.useCase.execute(id);

    return ClientPresenter.toDTO(client);
  }
}