import { IClient } from '@/domain/entity/client';
import { instanceToDTO } from '../presenter.helper';
import { ClientDTO } from './dto/client.dto';

export class ClientPresenter {
  static toDTO(data: IClient): ClientDTO;
  static toDTO(data: IClient[]): ClientDTO[];
  static toDTO<T extends IClient | IClient[]>(data: T): ClientDTO | ClientDTO[] {
    if (Array.isArray(data)) {
      return instanceToDTO(data, ClientDTO);
    }

    const client = instanceToDTO(data, ClientDTO) as ClientDTO;

    return client;
  }
}
