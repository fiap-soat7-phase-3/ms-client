import { Module } from '@nestjs/common';
import { ClientController } from './routes/client.controller';

@Module({
  providers: [],
  controllers: [ClientController],
})
export class AppModule {}
