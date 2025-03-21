import { IClient } from "../entity/client";

export interface IClientRepository {
  create(data: IClient): Promise<IClient>;
  findById(id: string): Promise<IClient>;
}
