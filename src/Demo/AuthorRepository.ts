import IdentityBigInt from '../BuildingBlocks/ValueObject/IdentityBigInt'
import UUID from '../BuildingBlocks/ValueObject/UUID'
import Author from './Author'
import RepositoryPrismaPostgres from './RepositoryPrismaPostgres'

export default class AuthorRepository extends RepositoryPrismaPostgres<Author> {
  protected readonly table = 'Author'

  public async add(author: Author): Promise<void> {
    await this.db.author.create({
      data: {
        id: author.identity.props.id.valueOf(),
        uuid: author.identity.props.uuid.valueOf(),
        name: author.props.name,
      },
    })
  }

  public async get(identity: IdentityBigInt): Promise<Author> {
    await Promise.resolve([this.table, identity])
    throw new Error('Method not implemented.')
  }

  public async getAll(): Promise<Author[]> {
    await Promise.resolve(this.table)
    throw new Error('Method not implemented.')
  }

  public async findByUUID(uuid: UUID): Promise<Author> {
    await Promise.resolve([this.table, uuid])
    throw new Error('Method not implemented.')
  }

  public async remove(entity: Author): Promise<void> {
    await Promise.resolve([this.table, entity])
    throw new Error('Method not implemented.')
  }

  public async removeAll(): Promise<void> {
    await Promise.resolve(this.table)
    throw new Error('Method not implemented.')
  }
}
