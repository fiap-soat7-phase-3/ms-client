import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClientDTO } from '../../../application/presenter/client/dto/client.dto';
import { ClientCreateDTO } from '../../../application/presenter/client/dto/client-create.dto';
import { CreateClientController } from '@/application/controller/client/create-client.controller';
import { clientRepository } from '@/adapter/database/database.adapter';
import { GetClientController } from '@/application/controller/client/get-client.controller';

@ApiTags('Client')
@Controller()
export class ClientController {
  private createClientController = new CreateClientController(clientRepository);

  private getClientController = new GetClientController(clientRepository);

  @Post('')
  @ApiOperation({ summary: 'Create Client' })
  @ApiResponse({
    status: 201,
    description: 'The client has been successfully created.',
    type: ClientDTO,
  })
  create(@Body() data: ClientCreateDTO): Promise<ClientDTO> {
    return this.createClientController.handle(data);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Client details' })
  @ApiResponse({
    status: 201,
    description: 'client details.',
    type: ClientDTO,
  })
  getById(@Param('id') id: string): Promise<ClientDTO> {
    return this.getClientController.handle(id);
  }
}
