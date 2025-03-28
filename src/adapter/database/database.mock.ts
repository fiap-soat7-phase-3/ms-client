import { ClientSchema } from './schema/client.schema';
import { IModel } from './repository/repository-base';
import { IClient } from '@/domain/entity/client';

export class Mock {
  constructor(private readonly clientModel: IModel<ClientSchema>) {}

  async execute(): Promise<void> {
    const checkMock = await this.clientModel.findById('1ad8f3c1-09af-4fdd-a98f-7b55b4ef4c79');

    if (checkMock) return;

    console.log('Inserting mock...');
    // Mock for development -> TODO: create migration
    // Client
    await this.clientModel.deleteMany({
      $or: [
        { _id: '1ad8f3c1-09af-4fdd-a98f-7b55b4ef4c79' },
        { _id: '2ad8f3c1-09af-4fdd-a98f-7b55b4ef4c79' },
        { _id: '3ad8f3c1-09af-4fdd-a98f-7b55b4ef4c79' },
        { _id: '4ad8f3c1-09af-4fdd-a98f-7b55b4ef4c79' },
        { _id: '5ad8f3c1-09af-4fdd-a98f-7b55b4ef4c79' },
      ],
    });
    await this.clientModel.insertMany([
      {
        _id: "1ad8f3c1-09af-4fdd-a98f-7b55b4ef4c79",
        name: "Leticia",
        document: "12384658322"
      }
    ] as (Omit<IClient, 'id'> & { _id: string })[]);

    console.log('Inserting mock... done!');
  }
}
