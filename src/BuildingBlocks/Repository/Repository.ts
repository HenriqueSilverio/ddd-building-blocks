import UUID from '../ValueObject/UUID'
import IdentityGenerator from './IdentityGenerator'

export default abstract class Repository<TIdentity, TEntity> implements IdentityGenerator<TIdentity> {
  public abstract nextIdentity(): Promise<TIdentity>

  public abstract add(entity: TEntity): Promise<void>

  public abstract get(identity: TIdentity): Promise<TEntity>

  public abstract getAll(): Promise<Array<TEntity>>

  public abstract findByUUID(uuid: UUID): Promise<TEntity>

  public abstract remove(entity: TEntity): Promise<void>

  public abstract removeAll(): Promise<void>
}
