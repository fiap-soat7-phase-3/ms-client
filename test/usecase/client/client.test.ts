// eslint-disable-next-line max-classes-per-file

import { CreateClientController } from "@/application/controller/client/create-client.controller";
import { GetClientController } from "@/application/controller/client/get-client.controller";
import { ClientPresenter } from "@/application/presenter/client/client.presenter";
import { ClientCreateDTO } from "@/application/presenter/client/dto/client-create.dto";
import { ClientDTO } from "@/application/presenter/client/dto/client.dto";
import { instanceToDTO } from "@/application/presenter/presenter.helper";
import { EntityIdentityDTO } from "@/application/presenter/presenter.interface";
import { IClient } from "@/domain/entity/client";
import { IClientRepository } from "@/domain/repository/client.repository";
import { getTestRepositories } from "@/test/database.helper";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { v4 } from "uuid";

describe('Vehicle usecases and controllers', () => {
  let clientRepository: IClientRepository;

  beforeAll(() => {
    clientRepository = getTestRepositories().clientRepository;
  });

  it('create a client', async () => {
    const controller = new CreateClientController(clientRepository);

    const mockClientRequest: ClientCreateDTO = {
      name: "Roberto",
      document: "12312321",
    };

    const result = await controller.handle(mockClientRequest);

    expect(result.id).toHaveLength(v4().length);
  });

  it('get a client', async () => {
    const controller = new GetClientController(clientRepository);

    const result = await controller.handle("1ad8f3c1-09af-4fdd-a98f-7b55b4ef4c79");

    expect(result.id).toHaveLength(v4().length);
  });

  it('error get a client - client not found', async () => {
    try {
      const controller = new GetClientController(clientRepository);

      await controller.handle("");
    } catch (error) {
      expect(error).toThrowError;
    }
  });

  it('should validate a valid ClientCreateDTO', async () => {
    const dto = plainToInstance(ClientCreateDTO, {
      name: 'Roberto Augusto',
      document: '123456983',
    });

    expect(dto).toEqual({"document": "123456983", "name": "Roberto Augusto"});
  });

});

describe('EntityIdentityDTO', () => {
  it('should be defined', () => {
    expect(new EntityIdentityDTO()).toBeDefined();
  });

  describe('id property', () => {
    it('should be optional', () => {
      const dto = new EntityIdentityDTO();
      expect(dto.id).toBeUndefined();
      
      dto.id = 'test-id';
      expect(dto.id).toBeDefined();
    });
  });
});

describe('ClientPresenter.toDTO', () => {
  it('should call instanceToDTO with an array of clients and return ClientDTO[]', () => {
    const clients: IClient[] = [
      { id: "1", name: 'John Doe', document: "123123" },
      { id: "2", name: 'Jane Doe', document: "213123" },
    ];

    const expectedDTOs: ClientDTO[] = [
      { id: "1", name: 'John Doe', document: "123123", createdAt: undefined, _id: "1"},
      { id: "2", name: 'Jane Doe', document: "213123", createdAt: undefined, _id: "2" },
    ];

    const result = ClientPresenter.toDTO(clients);

    expect(result).toHaveLength;
  });
});