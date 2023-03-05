export default interface IdentityGenerator<TIdentity> {
  nextIdentity(): Promise<TIdentity>
}
