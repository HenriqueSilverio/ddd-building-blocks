import { PrismaClient } from '@prisma/client'
import Repository from '../BuildingBlocks/Repository/Repository'

export default abstract class RepositoryPrisma<TIdentity, TEntity> extends Repository<TIdentity, TEntity> {
  protected readonly db: PrismaClient

  constructor(client: PrismaClient) {
    super()
    this.db = client
  }
}
