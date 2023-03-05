import RepositoryPrisma from './RepositoryPrisma'
import IdentityBigInt from '../BuildingBlocks/ValueObject/IdentityBigInt'

export default abstract class RepositoryPrismaPostgres<TEntity> extends RepositoryPrisma<IdentityBigInt, TEntity> {
  protected abstract readonly table: string

  public async nextIdentity(): Promise<IdentityBigInt> {
    const rows = await this.db.$queryRawUnsafe<Array<{ nextval: bigint }>>(`SELECT NEXTVAL('"${this.sequence}"')`)
    return IdentityBigInt.create(rows[0].nextval)
  }

  private get sequence(): string {
    return `${this.table}_id_seq`
  }
}
